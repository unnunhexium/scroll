export const calculations = [];

function createConnectionElement(path) {
    const element = document.createElementNS("http://www.w3.org/2000/svg", 'path')
    element.setAttribute('d', path)
    element.setAttribute('stroke-dasharray', '10,5')
    element.setAttribute('fill', 'none')
    element.setAttribute('stroke-width', 2)
    element.setAttribute('stroke', 'gray')
    return element
}

function connectionPath(firstElement, secondElement) {
    const firstElementCoordinates = firstElement.getBoundingClientRect();
    const secondElementCoordinates = secondElement.getBoundingClientRect();
    const startingPointX = firstElementCoordinates.x + firstElementCoordinates.width;
    const startingPointY = firstElementCoordinates.y + (firstElementCoordinates.height / 2);

    const endingPointX = secondElementCoordinates.x
    const endingPointY = secondElementCoordinates.y + (secondElementCoordinates.height / 2);

    const halfDistanceBetween = (endingPointX - startingPointX) / 2;
    const controlPointX = startingPointX + halfDistanceBetween;

    return `M${startingPointX},${startingPointY} C${controlPointX},${startingPointY} ${controlPointX},${endingPointY} ${endingPointX},${endingPointY}`
}

export const recalculate = (element, path) => {
    const recalculatedPath = path()
    element.setAttribute('d', recalculatedPath)
}


export const setConnection = (firstElement, secondElement) => {
    const svgContainer = document.querySelector('svg')
    const listOfElements = document.querySelector('.list-of-elements');
    svgContainer.setAttribute('height', listOfElements.getBoundingClientRect().height)
    const path = connectionPath(firstElement, secondElement)
    const element = createConnectionElement(path)
    svgContainer.appendChild(element)
    calculations.push(recalculate.bind(null, element, connectionPath.bind(null, firstElement, secondElement)))
}
