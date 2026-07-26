"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { properties, cities, type Property } from "@/data/properties";
import PropertyCard from "@/components/property/PropertyCard";
import PropertyModal from "@/components/property/PropertyModal";
import Reveal from "@/components/ui/Reveal";
import { CITY_FILTER_EVENT, OPEN_PROPERTY_EVENT } from "@/lib/events";

type SortKey = "default" | "price-asc" | "price-desc";

export default function Properties() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All Cities");
  const [sort, setSort] = useState<SortKey>("default");
  const [selected, setSelected] = useState<Property | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) setCity(detail);
    };
    window.addEventListener(CITY_FILTER_EVENT, handler);
    return () => window.removeEventListener(CITY_FILTER_EVENT, handler);
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      const property = properties.find((p) => p.id === id);
      if (property) setSelected(property);
    };
    window.addEventListener(OPEN_PROPERTY_EVENT, handler);
    return () => window.removeEventListener(OPEN_PROPERTY_EVENT, handler);
  }, []);

  const filtered = useMemo(() => {
    let list = properties.filter((p) => {
      const matchesCity = city === "All Cities" || p.city === city;
      const q = search.trim().toLowerCase();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q);
      return matchesCity && matchesSearch;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [search, city, sort]);

  return (
    <section className="properties" id="properties">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Featured Listings</p>
            <h2 className="section-title">
              Curated homes, <em>ready to explore</em>
            </h2>
          </div>
        </div>

        <Reveal className="filter-bar">
          <input
            type="text"
            placeholder="Search by name or location…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search properties"
          />
          <select value={city} onChange={(e) => setCity(e.target.value)} aria-label="Filter by city">
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            aria-label="Sort by price"
          >
            <option value="default">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
          <span className="filter-count">
            {filtered.length} {filtered.length === 1 ? "property" : "properties"}
          </span>
        </Reveal>

        <motion.div className="property-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onView={() => setSelected(property)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.p
            className="filter-empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No properties match your search — try a different city or keyword.
          </motion.p>
        )}
      </div>

      <PropertyModal property={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
