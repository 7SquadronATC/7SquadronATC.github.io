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
});