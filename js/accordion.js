document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.faq__accordion', {
  duration: 700,
  elementClass: 'faq__accordion__items',
  triggerClass: 'faq__accordion__top',
  panelClass: 'faq__accordion__bottom',
  showMultiple: false,
  openOnInit: [0],
    collapse: true
});
})
