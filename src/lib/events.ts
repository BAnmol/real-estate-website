/**
 * Cross-component signals for interactions that don't share a parent close
 * enough to prop-drill cleanly (Neighborhoods/Showcase live outside the
 * Properties section but need to drive its state).
 */
export const CITY_FILTER_EVENT = "aris:filter-city";
export const OPEN_PROPERTY_EVENT = "aris:open-property";

export function dispatchCityFilter(city: string) {
  window.dispatchEvent(new CustomEvent(CITY_FILTER_EVENT, { detail: city }));
}

export function dispatchOpenProperty(propertyId: string) {
  window.dispatchEvent(new CustomEvent(OPEN_PROPERTY_EVENT, { detail: propertyId }));
}
