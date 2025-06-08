import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { CheckCircle, Truck, Weight } from "lucide-react";
import { SkipCardProps } from "../types/skip";

const SkipCard = ({ skip, isSelected, onSelect }: SkipCardProps) => {
  const totalPrice = skip.price_before_vat + (skip.price_before_vat * skip.vat / 100);

  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer group ${
      isSelected 
        ? 'ring-2 ring-blue-500 shadow-lg bg-gradient-to-br from-blue-50 to-white' 
        : 'hover:shadow-md bg-gradient-to-br from-gray-50 to-white'
    }`} onClick={() => onSelect(skip.id)}>
      {isSelected && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-blue-500 rounded-full p-1">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
        </div>
      )}
      
      <CardContent className="p-6">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-foreground">{skip.size} Yard Skip</h3>
            <Badge variant="secondary" className="text-xs">
              {skip.hire_period_days} days
            </Badge>
          </div>
          
          {/* Skip illustration */}
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-4 mb-4 relative overflow-hidden">
            <div className="text-center text-white font-bold text-sm opacity-80">
              SKIP HIRE
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Truck className="w-4 h-4" />
            <span>{skip.allowed_on_road ? 'Road placement allowed' : 'Private land only'}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Weight className="w-4 h-4" />
            <span>{skip.allows_heavy_waste ? 'Heavy waste allowed' : 'Light waste only'}</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-muted-foreground">Total price (inc. VAT)</p>
              <p className="text-2xl font-bold text-foreground">£{totalPrice.toFixed(0)}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">From £{skip.price_before_vat}</p>
              <p className="text-xs text-muted-foreground">+ {skip.vat}% VAT</p>
            </div>
          </div>
          
          <Button 
            className={`w-full transition-all duration-300 ${
              isSelected 
                ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                : 'bg-primary hover:bg-primary/90'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(skip.id);
            }}
          >
            {isSelected ? 'Selected' : 'Select This Skip'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkipCard;
