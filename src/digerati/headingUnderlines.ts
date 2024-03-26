/**
 * Heading Underlines.
 * 
 * @author <cabal@digerati.design>
 */
export const headingUnderlines = () => {
    const spanWrappers = document.querySelectorAll('.span-wrapper'),
        spanElements = document.querySelectorAll('.span-element');
    spanWrappers.forEach((spanWrapper, index) => {
        let spanElement = spanElements[index];
        spanWrapper.appendChild(spanElement.cloneNode(true));
    });
};

