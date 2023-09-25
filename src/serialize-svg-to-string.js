const inlineSvgFonts = require('./font-inliner');

/**
 * Serialize a given SVG DOM to a string.
 * @param {SVGSVGElement} svgTag The SVG element to serialize.
 * @param {boolean|object} [injectFonts] True if fonts should be included in the SVG as
 *     base64 data. Use an object for specification of custom fonts.
 * @returns {string} String representing current SVG data.
 */
// const serializeSvgToString = (svgTag, shouldInjectFonts) => {
const serializeSvgToString = (svgTag, injectFonts) => {
    const serializer = new XMLSerializer();
    let string = serializer.serializeToString(svgTag);
    // if (shouldInjectFonts) {
    if (injectFonts) {
        // string = inlineSvgFonts(string);
        string = inlineSvgFonts(string, injectFonts);
    }
    return string;
};

module.exports = serializeSvgToString;
