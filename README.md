# koco-confirm-modal
Confirmation modal for Knockout. Used to display a confirm/cancel modal.

## Installation

```bash
bower install koco-confirm-modal
```

Requires `koco-modaler` also be instantiated within the project.

## Usage with koco

The modaler must be registered, by convention in `components.js'

```
modaler.registerModal('confirm', {
    backdrop: 'static',
    keyboard: false,
    basePath: 'bower_components/koco-confirm-modal/src'
});
```

To use it:

```
modaler.show('confirm', {
    message: 'Are you sure you want to quit?',
    okButtonHtml: 'Quit'
});
```

_Note: Currently the cancel button will always appear in French. Localization to come._