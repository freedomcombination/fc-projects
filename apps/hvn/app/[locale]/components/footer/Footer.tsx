
'use client'

export const Footer = () => {
    return (
        <footer className="py-6 border-t">
            <div className="container mx-auto text-center">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Harmonie van Nederland. All rights reserved.
                </p>
            </div>
        </footer>
    )
}