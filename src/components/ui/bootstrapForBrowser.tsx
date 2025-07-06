'use client'
import { useEffect } from 'react';

const BootstrapForBrowser = () => {
    useEffect(() => {
        // Dynamically import Bootstrap JavaScript
        const loadBootstrap = async () => {
            try {
                await import('bootstrap/dist/js/bootstrap.bundle.min.js');
            } catch (error) {
                console.warn('Failed to load Bootstrap JavaScript:', error);
            }
        };
        
        loadBootstrap();
    }, []);
    
    return null;
};

export default BootstrapForBrowser;