import { Accordion } from './components/accordion';
import { ready } from './helpers';
import './styles/index.scss';

ready(() => {
    const $navBurgers = document.querySelectorAll<HTMLElement>('.navbar-burger');
    $navBurgers.forEach($el => {
        $el.addEventListener('click', () => {
            const $target = document.getElementById($el.dataset.target);
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    });

    const $accordions = document.querySelectorAll<HTMLElement>('.accordion');
    $accordions.forEach($el => {
        new Accordion($el);
    });
});