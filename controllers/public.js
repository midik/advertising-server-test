const ad = 'http://localost:3001/public/ad';    // TODO

/**
 * Get some public content
 * @param ctx
 */
export const getPage = async (ctx) => {

    /* eslint-disable-next-line */
    const content = `
    <html>
    <body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales eleifend lorem sit amet facilisis.
        Donec porttitor ligula vitae bibendum laoreet. Phasellus odio velit, tempus lacinia lectus sit amet, pellentesque sagittis sem.
        Morbi facilisis elementum odio eget semper. Etiam interdum felis vel nulla ullamcorper semper. Nam malesuada tellus nec quam molestie placerat.
        Suspendisse eu rutrum ex. Donec eu orci nisl. Curabitur eget rhoncus eros. Suspendisse ac eleifend sapien. Sed eget feugiat eros.
        
        <script src="${ad}"></script>
        
        Ut eu gravida mi, at venenatis mi. Nulla accumsan lorem nec velit aliquam posuere. Nam ut ligula sit amet lectus tincidunt eleifend eu eget leo.
        Sed ut arcu mauris. Nunc congue semper massa, eget aliquam orci pretium a. Morbi posuere neque turpis, non molestie felis commodo ac.
        Aliquam volutpat, augue nec vestibulum volutpat, ante quam convallis lorem, ut fermentum neque lectus at tortor. Mauris ut congue velit.
        Fusce malesuada lacinia enim et blandit. Maecenas et rhoncus dolor, ac egestas nibh. Praesent tincidunt orci auctor felis ullamcorper aliquam.
    </body>
    </html>
    `;

    ctx.ok(content);
};


/**
 * Get the ad
 * @param ctx
 * @todo
 */
export const getAd = async (ctx) => {
    ctx.ok('Under construction');
};
