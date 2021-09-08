import { heroes } from "../data/heros";

export const getHeroByPublisher = (publisher) => {
    
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if (!validPublisher.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no es correcto"`)
    }

    return heroes.filter(hero=>hero.publisher === publisher)
}