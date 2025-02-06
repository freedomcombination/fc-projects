// apps/hvn/app/[locale]/components/hero/Hero.tsx
export const Hero = () => {
    return (
        <div className="relative h-screen w-full">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1558551649-e44c8f992010')`,
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative z-10 flex h-full items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
                        Harmonie van Nederland
                    </h1>
                    <p className="mb-8 text-xl text-white/90 md:text-2xl">
                        Cultural Harmony of Netherlands
                    </p>
                    <button className="rounded-lg bg-orange-500 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-orange-600">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};