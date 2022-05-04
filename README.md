##Análisis realizado:

* ¿Qué dependencias están usando?

- Dependencies

1. [es6-promise](https://www.npmjs.com/package/es6-promise) -> Polyfill de ES6 Promise.
2. [Needle](https://www.npmjs.com/package/needle) -> Cliente HTTP
3. [object-asign](https://www.npmjs.com/package/object-assign) -> "Assigns enumerable own properties of source objects to the target object and returns the target object. Additional source objects will overwrite previous ones".

- DevDependencies

0. Los necesarios para las pruebas de unidad y TDD, que se analizan más adelante.
1. [q](https://www.npmjs.com/package/q) -> Permite devolver promesas cuando una función no puede devolver un valor o throw Error.


* ¿Cuál es el archivo principal?

El archivo principal es main.js, pues contiene a "Trello en local", con todas las peticiones que se pueden hacer a la api de trello y la conexión al mismo.

* ¿Están usando Common JS o ESM?

Se está usando la sitáxis de CommonJS para importar componentes.

* ¿Qué framework de pruebas están usando?

Se está usando [Mocha](https://mochajs.org/) junto con la librería de aserción [Chai](https://www.chaijs.com/).
Se está usando también [sinon](https://www.npmjs.com/package/sinon) y [sinon-chai](https://www.npmjs.com/package/sinon-chai) para apoyar con aserciones en el teting (como expect().toBe() en jest). 

* ¿Cómo están diseñadas las pruebas?

Sobre el diseño de las pruebas se puede ver que prácticamente se está realizando un grupo de pruebas por cada método para usar una funcionalidad de trello.

![Imgur](https://i.imgur.com/oAogg8L.png)

Si nos metemos a un conjunto de pruebas, como para el método de añadir un board, podremos ver que las pruebas o "tests" se usa sinon-chai para validar los comportamientos (como expect()toBe() en jest).

![Imgur](https://i.imgur.com/apvHPxE.png)

![Imgur](https://i.imgur.com/McKnsCr.png)


---

Aquí termina mi análisis






[![Build Status](https://travis-ci.org/norberteder/trello.svg?branch=master)](https://travis-ci.org/norberteder/trello)

# trello
## A simple asynchronous client for [Trello](http://www.trello.com)

This is a wrapper for some of the Trello HTTP API. Please feel free to add any other pieces you need! :)

## Installation
    npm install trello

## Usage
Log in to Trello and visit [trello.com/app-key](https://trello.com/app-key) to get a `token` and `app key`. These need to be supplied when you create the Trello object (see below).

## Example
```javascript
  var Trello = require("trello");
  var trello = new Trello("MY APPLICATION KEY", "MY USER TOKEN");

  trello.addCard('Clean car', 'Wax on, wax off', myListId,
      function (error, trelloCard) {
          if (error) {
              console.log('Could not add card:', error);
          }
          else {
              console.log('Added card:', trelloCard);
          }
      });
```

## Callback or promise
API calls can either execute a callback or return a promise. To return a promise just omit the callback parameter.

```javascript
  //Callback
  trello.getCardsOnList(listId, callback);

  //Promise
  var cardsPromise = trello.getCardsOnList(listId);
  cardsPromise.then((cards) => {
    //do stuff
  })
```

## Requests to API endpoints, not supported by this lib yet

```javascript
    // Get all registered tokens and webhooks
    // Url will look like: https://api.trello.com/1/members/me/tokens?webhooks=true&key=YOURKEY&token=YOURTOKEN
    trello.makeRequest('get', '/1/members/me/tokens', { webhooks: true })
      .then((res) => {
          console.log(res)
      });
```

## Available functions

### Add

* addAttachmentToCard 
* addBoard 
* addCard 
* addCardWithExtraParams 
* addChecklistToCard 
* addCommentToCard 
* addCustomField
* addDueDateToCard 
* addExistingChecklistToCard 
* addItemToChecklist 
* addLabelOnBoard 
* addLabelToCard 
* addListToBoard 
* addMemberToBoard 
* addMemberToCard 
* addOptionToCustomField
* addStickerToCard 
* addWebhook 
* copyBoard
* setCustomFieldOnCard

### Delete

* deleteCard 
* deleteLabel 
* deleteLabelFromCard 
* delMemberFromCard
* deleteWebhook 

### Get

* getActionsOnBoard
* getBoardMembers 
* getBoards 
* getCard 
* getCardsForList 
* getCardsOnBoard 
* getCardsOnBoardWithExtraParams 
* getCardsOnList 
* getCardsOnListWithExtraParams
* getCardStickers
* getChecklistsOnCard 
* getCustomFieldsOnBoard 
* getLabelsForBoard 
* getListsOnBoard 
* getListsOnBoardByFilter 
* getMember 
* getMemberCards 
* getOrgBoards 
* getOrgMembers 

### Update

* renameList 
* updateBoardPref 
* updateCard 
* updateCardDescription 
* updateCardList 
* updateCardName 
* updateCardPos
* updateChecklist 
* updateLabel 
* updateLabelColor 
* updateLabelName 

Everything that is not available as a function can be requested by calling `makeRequest`.

## History

### 0.12.0

* Replaced `restler` with `needle`

### 0.11.0

* Update optional fields
* Add optional field queries
* Add function `addCustomField`
* Add function `addOptionToCustomField`
* Add function `setCustomFieldOnCard`
* Add function `updateCardPos`
* Add function `delMemberFromCard`

### 0.10.0

* Add `copyBoard` functionality
* Add `getCustomFieldsOnBoard`
* Add `getActionsOnBoard`

### 0.9.1

* Added trailing slash to /boards/ call

### 0.9.0

* New function `getCardsOnBoardWithExtraParams`
* New function `getCardsOnListWithExtraParams`
* New function `addDueDateToCard`

### 0.8.0

* Rename list fixed
* Handle API rate limit by retries 
* New function `addCardWithExtraParams` 

### 0.7.0

* Public visibility for `makeRequest`

### 0.6.0

* added `getMember`
* added `getCardStickers`
* added `addStickerToCard`
* added `getOrgBoards`
* added `getMemberCards`
* added `updateBoardPref`
* added `addMemberToBoard`

### 0.5.1

* added `renameList`
* added `addChecklistToCard`
* added `getChecklistsOnCard`
* added `addExistingChecklistToCard`
* added `updateChecklist`
* added `getOrgMembers`
* API methods now return the promise

### 0.5.0

* Support of promises
* Basic support of Labeling:
  * getLabelsForBoard
  * addLabelOnBoard
  * deleteLabel
  * addLabelToCard
  * deleteLabelFromCard

### 0.4.1

* Updated dev dependencies

### 0.4.0

* One-time listener
* `addAttachmentToCard` added
* Updated `restler` dependency
* Node.js support >= 0.10.x / removed 0.6 and 0.8

### 0.3.0

* Project `trello_ex` merged again with original project `trello`
* Using 'restler' again

### 0.2.0

* `getBoards` added
