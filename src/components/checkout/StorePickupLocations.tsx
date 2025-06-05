
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone } from "lucide-react";

interface StoreLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  hours: string;
  region: string;
}

const storeLocations: StoreLocation[] = [
  {
    id: "lagos-vi",
    name: "Victoria Island Store",
    address: "15 Adeola Odeku Street",
    city: "Victoria Island",
    state: "Lagos",
    phone: "0801-234-5678",
    hours: "Mon-Sat: 9AM-7PM",
    region: "Southwest"
  },
  {
    id: "lagos-ikeja",
    name: "Ikeja City Mall",
    address: "Obafemi Awolowo Way",
    city: "Ikeja",
    state: "Lagos",
    phone: "0801-234-5679",
    hours: "Mon-Sun: 10AM-9PM",
    region: "Southwest"
  },
  {
    id: "abuja-wuse",
    name: "Wuse 2 Branch",
    address: "Plot 123 Aminu Kano Crescent",
    city: "Wuse 2",
    state: "Abuja",
    phone: "0801-234-5680",
    hours: "Mon-Sat: 9AM-6PM",
    region: "North Central"
  },
  {
    id: "kano-city",
    name: "Kano Central Store",
    address: "Bompai Road, Zoo Road Junction",
    city: "Kano",
    state: "Kano",
    phone: "0801-234-5681",
    hours: "Mon-Fri: 9AM-6PM",
    region: "North"
  },
  {
    id: "port-harcourt",
    name: "Port Harcourt Mall",
    address: "Trans Amadi Industrial Layout",
    city: "Port Harcourt",
    state: "Rivers",
    phone: "0801-234-5682",
    hours: "Mon-Sat: 10AM-7PM",
    region: "South"
  },
  {
    id: "ibadan-ui",
    name: "University of Ibadan Area",
    address: "Opposite UI Main Gate",
    city: "Ibadan",
    state: "Oyo",
    phone: "0801-234-5683",
    hours: "Mon-Sat: 9AM-6PM",
    region: "Southwest"
  }
];

interface StorePickupLocationsProps {
  onLocationSelect: (location: StoreLocation) => void;
  selectedLocation?: StoreLocation;
}

export const StorePickupLocations = ({ onLocationSelect, selectedLocation }: StorePickupLocationsProps) => {
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  const regions = Array.from(new Set(storeLocations.map(store => store.region)));
  
  const filteredStores = selectedRegion 
    ? storeLocations.filter(store => store.region === selectedRegion)
    : storeLocations;

  const getRegionColor = (region: string) => {
    const colors = {
      "Southwest": "bg-blue-100 text-blue-800",
      "North Central": "bg-green-100 text-green-800",
      "North": "bg-purple-100 text-purple-800",
      "South": "bg-orange-100 text-orange-800"
    };
    return colors[region as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Select Your Pickup Location</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Choose a store location convenient for you. You'll receive an email notification when your order arrives at the selected store.
        </p>
        
        {/* Region Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Button 
            variant={selectedRegion === "" ? "default" : "outline"} 
            size="sm"
            onClick={() => setSelectedRegion("")}
          >
            All Regions
          </Button>
          {regions.map((region) => (
            <Button 
              key={region}
              variant={selectedRegion === region ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedRegion(region)}
            >
              {region}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredStores.map((store) => (
          <Card 
            key={store.id} 
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedLocation?.id === store.id ? 'ring-2 ring-primary bg-primary/5' : ''
            }`}
            onClick={() => onLocationSelect(store)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{store.name}</CardTitle>
                <Badge className={getRegionColor(store.region)}>
                  {store.region}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <div className="text-sm">
                  <p>{store.address}</p>
                  <p>{store.city}, {store.state}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{store.phone}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{store.hours}</span>
              </div>
              
              {selectedLocation?.id === store.id && (
                <div className="pt-2">
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    Selected for Pickup
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
