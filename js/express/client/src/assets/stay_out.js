
const catSound = new Audio('/cat.mp3')

export const surprise = () => {
    catSound.play()
    .catch(e => (console.error(e)))
}