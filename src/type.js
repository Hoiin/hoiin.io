'use-strict';

new TypeIt('.home__introduction__description--strong',{
    loop: true,
    speed: 120,
})
    .pause(2000)
    .delete()
    .type('Data Analyst,')
    .pause(2000)
    .delete()
    .go();