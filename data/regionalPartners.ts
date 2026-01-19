
import React from 'react';
import { RegionalPartner, TimelineEvent } from './types';

export const REGIONAL_PARTNERS: RegionalPartner[] = [
    {
        id: 'asia',
        region: 'ASIA',
        partnerName: 'JG AI (Headquarters)',
        description: 'The global central governance and strategic core. Our headquarters in Ahmedabad, Gujarat, oversees all intellectual property, core AI models, and sets the standards for our global ecosystem.',
        coordinates: { x: 72, y: 45 }
    },
    {
        id: 'na',
        region: 'North America',
        partnerName: 'BRJU Infosec Inc',
        description: 'Authorized regional operating partner for North America, providing secure and compliant AI infrastructure within the JG AI global ecosystem.',
        coordinates: { x: 18, y: 35 }
    },
    {
        id: 'eu',
        region: 'EU (including UK)',
        partnerName: 'IA7 Global',
        description: 'Authorized regional operating partner serving the EU and UK, delivering services compliant with GDPR and regional standards.',
        coordinates: { x: 47, y: 25 }
    },
    {
        id: 'me',
        region: 'Middle East (GCC)',
        partnerName: 'Shinu Enterprise',
        description: 'Driving enterprise AI and cybersecurity initiatives across the GCC region as an authorized regional operating partner.',
        coordinates: { x: 58, y: 42 }
    },
    {
        id: 'oc',
        region: 'Oceania',
        partnerName: 'SG IT Services & Consultacy',
        description: 'Providing regional support and implementation of JG AI technologies across Australia and New Zealand.',
        coordinates: { x: 85, y: 72 }
    }
];

export const REGIONAL_CARDS: RegionalPartner[] = [
    {
        id: 'asia',
        region: 'ASIA',
        partnerName: 'JG AI (Headquarters)',
        description: 'The global central governance and strategic core. Our headquarters in Ahmedabad, Gujarat, oversees all intellectual property, core AI models, and sets the standards for our global ecosystem.',
        coordinates: { x: 72, y: 45 }
    },
    {
        id: 'na',
        region: 'North America',
        partnerName: 'BRJU Infosec Inc',
        description: 'Authorized regional operating partner for North America, providing secure and compliant AI infrastructure within the JG AI global ecosystem.',
        coordinates: { x: 18, y: 35 }
    },
    {
        id: 'eu',
        region: 'EU (including UK)',
        partnerName: 'IA7 Global',
        description: 'Authorized regional operating partner serving the EU and UK, delivering services compliant with GDPR and regional standards.',
        coordinates: { x: 47, y: 25 }
    },
    // {
    //     id: 'me',
    //     region: 'Middle East (GCC)',
    //     partnerName: 'Shinu Enterprise',
    //     description: 'Driving enterprise AI and cybersecurity initiatives across the GCC region as an authorized regional operating partner.',
    //     coordinates: { x: 58, y: 42 }
    // },
    // {
    //     id: 'oc',
    //     region: 'Oceania',
    //     partnerName: 'SG IT Services & Consultacy',
    //     description: 'Providing regional support and implementation of JG AI technologies across Australia and New Zealand.',
    //     coordinates: { x: 85, y: 72 }
    // }
];

export const JOURNEY: TimelineEvent[] = [
    {
        year: '2020',
        title: 'Inception',
        description: 'Founded in Ahmedabad with a core team of engineers focusing on Cloud Solutions and web application architecture.'
    },
    {
        year: '2021',
        title: 'Expansion',
        description: 'Launched Enterprise Solutions division. Secured first major clients in the Finance sector.'
    },
    {
        year: '2023',
        title: 'The AI Pivot',
        description: 'Established the AI Research Lab. Began development of our proprietary Agentic Framework.'
    },
    {
        year: '2024',
        title: 'Platform Launch',
        description: 'Released the JG AI Agents Marketplace (Beta) and secured Series funding to fuel innovation.'
    },
    {
        year: '2025',
        title: 'Global Scale',
        description: 'Opening remote hubs in 37+ countries and expanding for global trust and localized delivery.'
    }
];

export const GLOBAL_STATS = [
    { label: 'Operational Countries', value: '37+', description: 'Global remote hubs' },
    { label: 'Global Clients', value: '500+', description: 'Enterprise partners' },
    { label: 'Network Integrity', value: '100%', description: 'Centralized IP control' },
    { label: 'Operational Uptime', value: '99.99%', description: 'Availability' }
];

export const GLOBAL_STATEMENT = {
    title: "Centralized Governance, Global Reach",
    paragraphs: [
        "JG AI Research And Development Pvt Ltd is dedicated to delivering research-driven AI, secure cloud infrastructure, and next-gen digital platforms.",
        "While our headquarters in Ahmedabad manages core intellectual property, we scale through authorized regional partners to ensure localized compliance and expertise.",
        "This dual model allows us to solve the world's toughest challenges with consistent standards across every territory."
    ]
};

export const FOOTER_DISCLAIMER = [
    "JG AI Research And Development Pvt Ltd is a centralized technology ecosystem.",
    "Partner entities are authorized independent service providers and not subsidiaries unless documented.",
    "Proprietary technologies and trademarks are the sole property of JG AI Central Governance."
];
