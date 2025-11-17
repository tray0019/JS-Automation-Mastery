describe('Element interactions', () => {
    it('searches for a product', async () => {
        browser.url('https://www.amazon.ca/ref=nav_bb_logo') //https://ecommerce-playground.lambdatest.io/ 
        await $('button["type=submit"]').click()
    });
});


/**
 * Cannot work because im using cucumber framework
 */