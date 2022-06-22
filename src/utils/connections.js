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

function connectionPath(firstElementId, secondElementId) {
  const firstElement= document.getElementById(firstElementId);
  const secondElement = document.getElementById(secondElementId);
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

export const setConnection = (relation) => {
    const svgContainer = document.querySelector('svg')
    const listOfItems = document.querySelector('.list-of-items');
    svgContainer.setAttribute('height', listOfItems.getBoundingClientRect().height) 
    const path = connectionPath(relation.startPointId, relation.endPointId)
    const element = createConnectionElement(path)
    svgContainer.appendChild(element)
    calculations.push(recalculate.bind(null, element, connectionPath.bind(null, relation.startPointId, relation.endPointId)))
}


