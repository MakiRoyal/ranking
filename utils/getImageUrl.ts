import { Player } from "~/modals/types"

const GetImageUrl = (player: Player): string | null => {
    if (player?.image?.formats?.small?.url) {
        return player?.image?.formats?.small?.url
    }

    if (player?.image?.formats?.medium?.url) {
        return player?.image?.formats?.medium?.url
    }

    if (player?.image?.formats?.large?.url) {
        return player?.image?.formats?.large?.url
    }

    if (player?.image?.url) {
        return player?.image?.url
    }

    return null
}

export default GetImageUrl