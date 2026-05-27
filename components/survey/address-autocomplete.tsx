"use client"

import { useEffect, useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { MapPin } from "lucide-react"

export interface AddressDetails {
  formattedAddress: string
  state?: string
  city?: string
  county?: string
}

interface AddressAutocompleteProps {
  value: string
  onChange: (address: string) => void
  onSelect: (address: string, details: AddressDetails) => void
  placeholder?: string
  className?: string
  inputClassName?: string
}

declare global {
  interface Window {
    google: typeof google
    initGooglePlaces: () => void
  }
}

// SINGLETON loader: the Google Maps script must load EXACTLY ONCE per page. The
// advertorial renders multiple AddressAutocomplete instances (sticky top bar + the
// inline survey + the modal survey). The old per-mount loader injected its own
// <script> in each instance, so Google loaded multiple times and the Places API
// threw "included multiple times" and broke autocomplete page-wide (no predictions,
// sticky-bar pick could not seed the popup). This module-level promise, guarded by a
// `data-google-maps` attribute, guarantees a single load; every instance awaits it
// and binds when ready.
let googleMapsPromise: Promise<void> | null = null
function loadGoogleMaps(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve()
  if (window.google?.maps?.places) return Promise.resolve()
  if (googleMapsPromise) return googleMapsPromise
  googleMapsPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>("script[data-google-maps]")
    if (existing) {
      existing.addEventListener("load", () => resolve())
      existing.addEventListener("error", () => reject(new Error("Google Maps failed to load")))
      if (window.google?.maps?.places) resolve()
      return
    }
    const script = document.createElement("script")
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}&libraries=places`
    script.async = true
    script.defer = true
    script.setAttribute("data-google-maps", "true")
    script.onload = () => resolve()
    script.onerror = () => reject(new Error("Google Maps failed to load"))
    document.head.appendChild(script)
  })
  return googleMapsPromise
}

export function AddressAutocomplete({
  value,
  onChange,
  onSelect,
  placeholder = "Start typing your address...",
  className = "",
  inputClassName = "",
}: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false
    loadGoogleMaps()
      .then(() => {
        if (cancelled) return
        setIsLoaded(true)
        initAutocomplete()
      })
      .catch(() => {
        /* key/network failure — input still works as a plain text field */
      })

    return () => {
      cancelled = true
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const initAutocomplete = () => {
    if (!inputRef.current || !window.google?.maps?.places) return

    // Ultra Homebuyers buys nationwide, so no bounds restriction. US addresses only.
    autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: "us" },
      types: ["address"],
      fields: ["formatted_address", "address_components"],
    })

    autocompleteRef.current.addListener("place_changed", () => {
      const place = autocompleteRef.current?.getPlace()
      if (!place?.formatted_address) return

      let state = ""
      let city = ""
      let county = ""

      place.address_components?.forEach((component) => {
        if (component.types.includes("administrative_area_level_1")) state = component.short_name
        if (component.types.includes("locality")) city = component.long_name
        if (component.types.includes("administrative_area_level_2")) county = component.long_name
      })

      const details: AddressDetails = {
        formattedAddress: place.formatted_address,
        state,
        city,
        county,
      }

      onChange(place.formatted_address)
      onSelect(place.formatted_address, details)
    })
  }

  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={`relative ${className}`}>
      {!value && !isFocused && (
        <div className="absolute -inset-1 rounded-2xl bg-[#1a3d6b]/20 animate-pulse" />
      )}
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
          <MapPin className="h-5 w-5 text-[#1a3d6b]" />
        </div>
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={
            inputClassName ||
            "h-16 pl-10 rounded-xl border-2 border-[#1a3d6b]/50 bg-white text-lg text-gray-900 placeholder:text-gray-400 focus:border-[#1a3d6b] focus:ring-[#1a3d6b]/20"
          }
        />
        {!isLoaded && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-200 border-t-[#1a3d6b]" />
          </div>
        )}
      </div>
    </div>
  )
}
