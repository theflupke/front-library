import { standardValidation } from '@creative-web-solution/front-library/Modules/Validator/Tools/ValidationState';
import isDate from '@creative-web-solution/front-library/Modules/Validator/Tools/isDate';
import { addValidator } from '@creative-web-solution/front-library/Modules/Validator';

/**
 * Date validation
 */
addValidator( 'date', '[data-date-control]', ( $input, value, isLiveValidation ) => {
    return standardValidation(
        $input,
        value,
        value === '' ||
            isDate(
                value,
                $input.getAttribute( 'data-date-control' )
            ),
        'date',
        undefined,
        isLiveValidation
    );
} );
