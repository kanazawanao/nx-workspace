import {} from '@angular/google-maps';

export class Place implements google.maps.places.PlaceResult {
  constructor(public place: google.maps.places.PlaceResult) {
    this.address_components = place.address_components;
    this.adr_address = place.adr_address;
    this.aspects = place.aspects;
    this.formatted_address = place.formatted_address;
    this.formatted_phone_number = place.formatted_phone_number;
    this.geometry = place.geometry;
    this.html_attributions = place.html_attributions;
    this.icon = place.icon;
    this.id = place.id;
    this.international_phone_number = place.international_phone_number;
    this.name = place.name;
    this.opening_hours = place.opening_hours;
    // this.permanently_closed = place.permanently_closed;
    this.photos = place.photos;
    this.place_id = place.place_id;
    this.plus_code = place.plus_code;
    this.price_level = place.price_level;
    this.rating = place.rating;
    this.reviews = place.reviews;
    this.types = place.types;
    this.url = place.url;
    this.user_ratings_total = place.user_ratings_total;
    // this.utc_offset = place.utc_offset;
    this.utc_offset_minutes = place.utc_offset_minutes;
    this.vicinity = place.vicinity;
    this.website = place.website;
    this.selected = false;
  }
  address_components?: google.maps.GeocoderAddressComponent[];
  adr_address?: string;
  aspects?: google.maps.places.PlaceAspectRating[];
  formatted_address?: string;
  formatted_phone_number?: string;
  geometry?: google.maps.places.PlaceGeometry;
  html_attributions?: string[];
  icon?: string;
  id?: string;
  international_phone_number?: string;
  name: string;
  opening_hours?: google.maps.places.OpeningHours;
  permanently_closed?: boolean;
  photos?: google.maps.places.PlacePhoto[];
  place_id?: string;
  plus_code?: google.maps.places.PlacePlusCode;
  price_level?: number;
  rating?: number;
  reviews?: google.maps.places.PlaceReview[];
  types?: string[];
  url?: string;
  user_ratings_total?: number;
  utc_offset?: number;
  utc_offset_minutes?: number;
  vicinity?: string;
  website?: string;
  selected: boolean;
}