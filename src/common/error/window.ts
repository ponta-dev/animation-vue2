import log from 'loglevel'

window.onerror = function(event, source, lineno, colno, error) {
    log.error('catch error on window.onerror'
        , 'event: ', event
        , 'source: ', source
        , 'line: ', lineno
        , 'col: ', colno
        , 'error message: ', error?.message
        , 'error stack: ', error?.stack
    )
}