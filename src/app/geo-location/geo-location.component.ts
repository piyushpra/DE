import { Component, OnInit } from '@angular/core';

declare var H: any;

@Component({
    selector: 'app-geo-location',
    templateUrl: './geo-location.component.html',
    styleUrls: ['./geo-location.component.css']
})
export class GeoLocationComponent implements OnInit {
    showWarning = false;  
    apiKey = '5mLPJXEk5e5WB8-hBGYPoMgHobI73LjF0P4jEt2Bt74';

    ngOnInit(): void {
        if (!this.apiKey) {
            this.showWarning = true;
        } else {
            this.initializeMap();
        }
    }

    hideAlert(): void {
        this.showWarning = false;
    }

    initializeMap(): void {
        const platform = new H.service.Platform({
            apikey: this.apiKey
        });

        const defaultLayers = platform.createDefaultLayers();

        const map = new H.Map(
            document.getElementById('map'),
            defaultLayers.vector.normal.map,
            {
                center: { lat: 28.462601639467074, lng: 77.02411266554478 },  
                zoom: 16,
                pixelRatio: window.devicePixelRatio || 1
            }
        );

        window.addEventListener('resize', () => map.getViewPort().resize());

        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
        const ui = H.ui.UI.createDefault(map, defaultLayers);

        this.addMarkerWithLabel(map, ui, 28.462601639467074, 77.02411266554478, "My Location");
    }

    addMarkerWithLabel(map: any, ui: any, lat: number, lng: number, label: string): void {
        const marker = new H.map.Marker({ lat, lng });
        map.addObject(marker);

        const bubble = new H.ui.InfoBubble({ lat, lng }, {
            content: `<b>${label}</b>`  // Displayed name inside the bubble
        });

        bubble.setClosable(false);
        ui.addBubble(bubble);
    }
}
