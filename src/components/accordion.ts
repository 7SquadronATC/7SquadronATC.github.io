export class Accordion {

    public constructor (
        private readonly $el: Element,
    ) {
        this.init();
    }

    private init (): void {
        const $items = this.$el.querySelectorAll('.accordion__item');
        $items.forEach($item => {
            $item.addEventListener('click', () => {
                $item.classList.toggle('accordion__item--open');
            });
        });
    }

}