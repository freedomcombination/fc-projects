
'use client'

export const Footer = () => {
    return (
        <footer className="w-full bg-background py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Harmonie van Nederland. All rights reserved.
                </p>
            </div>
        </footer>
    )
}