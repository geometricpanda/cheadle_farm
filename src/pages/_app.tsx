import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {apiPlugin, renderRichText, RichTextSchema, storyblokInit} from "@storyblok/react";
import {PageBlok} from "@/blocks/page-block";
import {HeroBlok} from "@/blocks/hero-blok";
import {TilesBlok} from "@/blocks/tiles-blok";
import {TileBlok} from "@/blocks/tiles-blok/tile-block.component";
import {CardBlok} from "@/blocks/card-blok/card-blok.component";
import {TextBlok} from "@/blocks/text-blok/text-blok.component";

storyblokInit({
    accessToken: "Yy83exjTvy3ikLkrkCtYmgtt",
    // bridge: true,
    use: [apiPlugin],
    components: {
        page: PageBlok,
        hero: HeroBlok,
        tiles: TilesBlok,
        tile: TileBlok,
        card: CardBlok,
        text: TextBlok,
    },
    apiOptions: {
        cache: {
            type: 'none'
        }
    }
});
export default function App({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}
