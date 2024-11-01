/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/**
* Computes the arccosine (in degrees) of a single-precision floating-point number.
*
* @param x - input value
* @returns arccosine (in degrees)
*
* @example
* var v = acosdf( 0.0 );
* // returns 0.0
*
* @example
* var v = acosdf( 0.5 );
* // returns ~60.0
*
* @example
* var sqrtf = require( '@stdlib/math-base-special-sqrtf' );
*
* var v = acosdf( sqrtf( 2 ) / 2 );
* // returns ~45.0
*
* @example
* var sqrtf = require( '@stdlib/math-base-special-sqrtf' );
*
* var v = acosdf( sqrtf( 3 ) / 2 );
* // returns ~30.0
*
* @example
* var v = acosdf( NaN );
* // returns NaN
*/
declare function acosdf( x: number ): number;


// EXPORTS //

export = acosdf;