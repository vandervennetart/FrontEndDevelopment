

const defaultConfig = {
    up: {
        content: "⬆️",
        title: "omlaag sorteren"
    },
    down: {
        content: "⬇️",
        title: "omlaag sorteren"
    }
}

export class SortButton {

    constructor (button, ascending = false, config = defaultConfig) {
        this.button = button
        this.ascending = ascending
        this.config = config

        this.button.addEventListener('click', () => this.toggle())
        this.isAscending ? this.setUp() : this.setDown()
    }

    setUp() {
        this.button.textContent = this.config.up.content
        this.button.title = this.config.up.title
        this.ascending = true
    }

    setDown() {
        this.button.textContent = this.config.down.content
        this.button.title = this.config.down.title
        this.ascending = false
    }

    toggle() {
        this.ascending ? this.setDown() : this.setUp()
    }

    get isAscending() {
        return this.ascending
    }
}