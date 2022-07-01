

export class Card {
    data: any;
    parentEl: HTMLElement
    el: HTMLElement;

    constructor(parentEl: HTMLElement, data: any) {
        this.el = this.createElement();
        this.parentEl = parentEl
        this.data = data
    }

    createElement() {
        const el = document.createElement('div');
        el.classList.add('card');

        return el;
    }
    render() {
        fetch(this.data.url)
            .then(response => response.json())
            .then(data => {
                const img = document.createElement('img');
                img.src = data.sprites.front_default;
                const span = document.createElement('span');
                span.textContent = data.name;
                this.el.append(img, span);
            })
            .catch()
            .finally()

        this.parentEl.append(this.el);
    }
}
