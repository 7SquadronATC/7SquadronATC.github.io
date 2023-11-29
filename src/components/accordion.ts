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
                const $icon = $item.querySelector('.accordion__icon');
                $icon.classList.toggle('fa-chevron-up');
                $icon.classList.toggle('fa-chevron-down');

                $item.classList.toggle('accordion__item--open');
            });
        });
    }

}