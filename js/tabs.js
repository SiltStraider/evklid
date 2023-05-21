document.querySelectorAll('.tabs-list__items__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-list__items__btn').forEach(function (btn) {
      btn.classList.remove('tabs-list__items__btn--active')
    });
    e.currentTarget.classList.add('tabs-list__items__btn--active');
    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});
