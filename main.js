$('.hover-pointer').on('click', () => {
    $(event.currentTarget).siblings().toggle('slow');
})