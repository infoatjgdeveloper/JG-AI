export interface RegionalPartner {
    id: string;
    region: string;
    partnerName: string;
    description: string;
    coordinates: { x: number; y: number };
}

export interface TimelineEvent {
    year: string;
    title: string;
    description: string;
}
