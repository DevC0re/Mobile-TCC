
import {
    Camera,
    Map,
    Marker,
} from "@maplibre/maplibre-react-native";

import { Crosshair, MapPin } from "lucide-react-native";
import { ActivityIndicator, View } from "react-native";

import { theme } from "../../style/theme";
import type { Coordinates } from "../../types/addressType";

import {
    Attribution,
    LocationButton,
    LocationButtonText,
    LocationButtonWrapper,
    MapCard,
    MapLayer,
    MarkerBubble,
} from "./style";

const DEFAULT_LOCATION: Coordinates = {
    latitude: -23.5505,
    longitude: -46.6333,
};

interface AddressMapPreviewProps {
    coordinates: Coordinates | null;
    onUseLocation: () => void;
    loading?: boolean;
}

export const AddressMapPreview = ({
                                      coordinates,
                                      onUseLocation,
                                      loading = false,
                                  }: AddressMapPreviewProps) => {
    const center = coordinates ?? DEFAULT_LOCATION;

    return (
        <View>
            <MapCard>
                <MapLayer pointerEvents="none">
                    <Map
                        androidView="texture"
                        mapStyle="https://tiles.openfreemap.org/styles/liberty"
                        dragPan={false}
                        touchZoom={false}
                        touchRotate={false}
                        touchPitch={false}
                        doubleTapZoom={false}
                        attribution
                    >
                        <Camera
                            key={`${center.latitude}:${center.longitude}`}
                            initialViewState={{
                                center: [
                                    center.longitude,
                                    center.latitude,
                                ],
                                zoom: coordinates ? 15 : 12,
                            }}
                        />

                        {coordinates && (
                            <Marker
                                id="endereco"
                                lngLat={[
                                    coordinates.longitude,
                                    coordinates.latitude,
                                ]}
                            >
                                <MarkerBubble>
                                    <MapPin
                                        size={19}
                                        color={theme.colors.teal}
                                    />
                                </MarkerBubble>
                            </Marker>
                        )}
                    </Map>
                </MapLayer>

                <LocationButtonWrapper>
                    <LocationButton
                        onPress={onUseLocation}
                        disabled={loading}
                        accessibilityRole="button"
                        accessibilityLabel="Usar minha localização"
                    >
                        {loading ? (
                            <ActivityIndicator
                                size="small"
                                color={theme.colors.navy}
                            />
                        ) : (
                            <Crosshair
                                size={15}
                                color={theme.colors.navy}
                            />
                        )}

                        <LocationButtonText>
                            {loading
                                ? "Localizando..."
                                : "Usar minha localização"}
                        </LocationButtonText>
                    </LocationButton>
                </LocationButtonWrapper>
            </MapCard>

            <Attribution>
                © OpenStreetMap contributors · OpenFreeMap
            </Attribution>
        </View>
    );
};
