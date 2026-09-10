const KEYWORDS = [
  "SELECT",
  "FROM",
  "WHERE",
  "AND",
  "OR",
  "NOT",
  "INSERT",
  "INTO",
  "VALUES",
  "UPDATE",
  "SET",
  "DELETE",
  "JOIN",
  "LEFT",
  "RIGHT",
  "INNER",
  "OUTER",
  "ON",
  "GROUP",
  "BY",
  "ORDER",
  "LIMIT",
  "OFFSET",
  "AS",
  "DISTINCT",
  "COUNT",
  "SUM",
  "AVG",
  "MIN",
  "MAX",
  "CREATE",
  "TABLE",
  "ALTER",
  "DROP",
  "IN",
  "IS",
  "NULL",
  "LIKE",
  "BETWEEN",
  "HAVING",
  "UNION",
  "ALL",
  "CASE",
  "WHEN",
  "THEN",
  "ELSE",
  "END",
  "DESC",
  "ASC",
  "EXISTS",
];

/* =========================================================================
   ICONS — small inline SVG set (Lucide-style: 24x24, stroke-based) used
   everywhere instead of emoji, for dynamically generated markup. Static
   buttons in the HTML above inline their own <svg> directly.
   ========================================================================= */
const ICONS = {
  chevronRight: '<polyline points="9 18 15 12 9 6"/>',
  chevronLeft: '<polyline points="15 18 9 12 15 6"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  database:
    '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>',
  table: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M12 3v18"/>',
  server:
    '<rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><path d="M6 7h.01"/><path d="M6 17h.01"/>',
  inbox:
    '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"/>',
  filePlus:
    '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5Z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="M9 15h6"/>',
  loader:
    '<path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  diamond: '<path d="M12 2 2 12l10 10 10-10Z"/>',
  key: '<path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l1.8-1.8a1 1 0 0 0 0-1.4L18.7 4.3a1 1 0 0 0-1.4 0l-1.8 1.8a1 1 0 0 0 0 1.4Z"/><path d="m11.5 11.5-3-3"/><path d="m3 21 3.5-3.5"/><path d="m14 8-8 8"/><circle cx="5" cy="19" r="2"/>',
  keyword: '<path d="M21 6H3"/><path d="M15 12H3"/><path d="M17 18H3"/>',
  // Brand marks for connection types, drawn in the same stroke-based style
  // as the rest of the icon set so they sit naturally in the schema tree.
  mysqlLogo:
    '<path d="M8.785,6.865a3.055,3.055,0,0,0-.785.1V7h.038a6.461,6.461,0,0,0,.612.785c.154.306.288.611.441.917.019-.019.038-.039.038-.039a1.074,1.074,0,0,0,.4-.957,4.314,4.314,0,0,1-.23-.4c-.115-.191-.364-.287-.517-.44" style="fill:#5d87a1;fill-rule:evenodd"/><path d="M27.78,23.553a8.849,8.849,0,0,0-3.712.536c-.287.115-.745.115-.785.478.154.153.172.4.307.613a4.467,4.467,0,0,0,.995,1.167c.4.306.8.611,1.225.879.745.461,1.588.728,2.314,1.187.422.268.842.612,1.264.9.21.153.343.4.611.5v-.058a3.844,3.844,0,0,0-.291-.613c-.191-.19-.383-.363-.575-.554a9.118,9.118,0,0,0-1.99-1.932c-.613-.422-1.953-1-2.2-1.7l-.039-.039a7.69,7.69,0,0,0,1.321-.308c.65-.172,1.243-.133,1.912-.3.307-.077.862-.268.862-.268v-.3c-.342-.34-.587-.795-.947-1.116a25.338,25.338,0,0,0-3.122-2.328c-.587-.379-1.344-.623-1.969-.946-.226-.114-.6-.17-.737-.36a7.594,7.594,0,0,1-.776-1.457c-.548-1.04-1.079-2.193-1.551-3.293a20.236,20.236,0,0,0-.965-2.157A19.078,19.078,0,0,0,11.609,5a9.07,9.07,0,0,0-2.421-.776c-.474-.02-.946-.057-1.419-.075A7.55,7.55,0,0,1,6.9,3.485C5.818,2.8,3.038,1.328,2.242,3.277,1.732,4.508,3,5.718,3.435,6.343A8.866,8.866,0,0,1,4.4,7.762c.133.322.171.663.3,1A22.556,22.556,0,0,0,5.687,11.3a8.946,8.946,0,0,0,.7,1.172c.153.209.417.3.474.645a5.421,5.421,0,0,0-.436,1.419,8.336,8.336,0,0,0,.549,6.358c.3.473,1.022,1.514,1.987,1.116.851-.34.662-1.419.908-2.364.056-.229.019-.379.132-.53V19.3s.483,1.061.723,1.6a10.813,10.813,0,0,0,2.4,2.59A3.514,3.514,0,0,1,14,24.657V25h.427A1.054,1.054,0,0,0,14,24.212a9.4,9.4,0,0,1-.959-1.16,24.992,24.992,0,0,1-2.064-3.519c-.3-.6-.553-1.258-.793-1.857-.11-.231-.11-.58-.295-.7a7.266,7.266,0,0,0-.884,1.313,11.419,11.419,0,0,0-.517,2.921c-.073.02-.037,0-.073.038-.589-.155-.792-.792-1.014-1.332a8.756,8.756,0,0,1-.166-5.164c.128-.405.683-1.681.461-2.068-.111-.369-.48-.58-.682-.871a7.767,7.767,0,0,1-.663-1.237C5.912,9.5,5.69,8.3,5.212,7.216a10.4,10.4,0,0,0-.921-1.489A9.586,9.586,0,0,1,3.276,4.22c-.092-.213-.221-.561-.074-.793a.3.3,0,0,1,.259-.252c.238-.212.921.058,1.16.174a9.2,9.2,0,0,1,1.824.967c.258.194.866.685.866.685h.18c.612.133,1.3.037,1.876.21a12.247,12.247,0,0,1,2.755,1.32,16.981,16.981,0,0,1,5.969,6.545c.23.439.327.842.537,1.3.4.94.9,1.9,1.3,2.814a12.578,12.578,0,0,0,1.36,2.564c.286.4,1.435.612,1.952.822a13.7,13.7,0,0,1,1.32.535c.651.4,1.3.861,1.913,1.3.305.23,1.262.708,1.32,1.091" style="fill:#00758f;fill-rule:evenodd"/>',
  postgresLogo:
    '<path d="M24.295 9.929c-0.010 0.155-0.082 0.292-0.191 0.387l-0.001 0.001c-0.131 0.143-0.306 0.243-0.504 0.278l-0.005 0.001c-0.028 0.004-0.061 0.007-0.094 0.007h-0c-0.001 0-0.003 0-0.004 0-0.312 0-0.58-0.189-0.694-0.46l-0.002-0.005c-0.030-0.221 0.33-0.388 0.701-0.44s0.764 0.011 0.794 0.231zM14.385 10.443c-0.121 0.311-0.418 0.528-0.766 0.528-0.004 0-0.007-0-0.011-0h0.001c-0 0-0 0-0 0-0.036 0-0.070-0.003-0.105-0.007l0.004 0c-0.261-0.047-0.483-0.191-0.63-0.392l-0.002-0.003c-0.082-0.094-0.132-0.219-0.132-0.354 0-0 0-0.001 0-0.001v0c0.012-0.077 0.055-0.143 0.115-0.185l0.001-0.001c0.152-0.084 0.334-0.133 0.528-0.133 0.083 0 0.164 0.009 0.242 0.026l-0.007-0.001c0.395 0.055 0.803 0.242 0.764 0.523zM25.403 18.086l-0.107-0.134-0.044-0.055c0.457-0.846 0.725-1.853 0.725-2.921 0-0.488-0.056-0.962-0.162-1.418l0.008 0.042c-0.070-0.453-0.111-0.976-0.111-1.508 0-0.007 0-0.014 0-0.021v0.001c0.023-0.501 0.076-0.97 0.158-1.429l-0.010 0.066c0.089-0.464 0.14-0.998 0.14-1.544 0-0.051-0-0.101-0.001-0.151l0 0.008c0.012-0.049 0.019-0.104 0.019-0.162 0-0.027-0.002-0.053-0.004-0.079l0 0.003c-0.4-1.58-1.151-2.949-2.168-4.073l0.007 0.008c-0.911-1.068-2.031-1.929-3.3-2.523l-0.060-0.025c0.696-0.149 1.496-0.234 2.316-0.234 0.075 0 0.15 0.001 0.225 0.002l-0.011-0c0.045-0.001 0.097-0.002 0.15-0.002 2.378 0 4.496 1.109 5.866 2.838l0.012 0.016c0.028 0.036 0.056 0.077 0.080 0.12l0.003 0.005c0.904 1.694-0.345 7.842-3.732 13.172zM25.117 9.322c-0.016 0.455-0.064 0.886-0.14 1.307l0.008-0.055c-0.078 0.425-0.134 0.931-0.157 1.445l-0.001 0.025c-0 0.017-0 0.036-0 0.056 0 0.567 0.042 1.124 0.124 1.668l-0.008-0.061c0.085 0.377 0.134 0.809 0.134 1.254 0 0.763-0.144 1.493-0.407 2.162l0.014-0.040c-0.076-0.131-0.155-0.289-0.224-0.453l-0.011-0.029c-0.066-0.159-0.209-0.416-0.406-0.77-0.769-1.38-2.571-4.611-1.649-5.929 0.474-0.678 1.676-0.707 2.722-0.579zM24.406 20.907c-0.051-1.039 0.336-1.148 0.746-1.263q0.085-0.023 0.169-0.051c0.050 0.044 0.105 0.087 0.162 0.125l0.005 0.003c0.62 0.273 1.342 0.431 2.102 0.431 0.592 0 1.161-0.096 1.693-0.274l-0.038 0.011c-0.344 0.293-0.736 0.544-1.16 0.738l-0.031 0.013c-0.644 0.264-1.391 0.429-2.173 0.454l-0.010 0c-0.119 0.018-0.256 0.029-0.395 0.029-0.386 0-0.754-0.080-1.087-0.224l0.018 0.007zM23.293 22.933c-0.021 0.221-0.045 0.47-0.077 0.745l-0.182 0.548c-0.014 0.040-0.022 0.086-0.023 0.134v0c0.001 0.027 0.001 0.058 0.001 0.089 0 0.355-0.053 0.699-0.151 1.022l0.006-0.025c-0.116 0.389-0.196 0.84-0.223 1.305l-0.001 0.016c-0.052 1.684-1.355 3.047-3.008 3.194l-0.013 0.001c-1.894 0.406-2.23-0.621-2.526-1.527q-0.045-0.142-0.096-0.283c-0.16-0.652-0.252-1.401-0.252-2.171 0-0.36 0.020-0.715 0.059-1.065l-0.004 0.043c0.006-0.128 0.009-0.279 0.009-0.43 0-1.026-0.154-2.016-0.441-2.948l0.019 0.071q0.008-0.55 0.024-1.114c0-0.003 0-0.008 0-0.012 0-0.046-0.007-0.090-0.020-0.132l0.001 0.003c-0.014-0.1-0.033-0.188-0.058-0.273l0.003 0.013c-0.141-0.521-0.496-0.941-0.964-1.164l-0.011-0.005c-0.176-0.088-0.384-0.14-0.605-0.14-0.104 0-0.205 0.011-0.302 0.033l0.009-0.002c0.128-0.47 0.26-0.854 0.412-1.228l-0.026 0.073 0.066-0.177c0.074-0.2 0.167-0.407 0.266-0.626 0.546-1.124 0.865-2.445 0.865-3.841 0-0.938-0.144-1.842-0.411-2.692l0.017 0.063c-0.183-1.108-1.135-1.943-2.281-1.943-0.18 0-0.356 0.021-0.524 0.060l0.016-0.003c-0.796 0.104-1.516 0.338-2.171 0.682l0.035-0.017q-0.124 0.063-0.245 0.13c0.091-2.147 0.896-4.090 2.181-5.615l-0.012 0.014c0.118-0.119 0.242-0.232 0.37-0.338l0.009-0.007c0.069-0.014 0.13-0.042 0.182-0.081l-0.001 0.001c0.893-0.654 2.014-1.047 3.227-1.047 0.097 0 0.193 0.002 0.288 0.007l-0.013-0.001c0.526 0.008 1.034 0.044 1.534 0.108l-0.067-0.007c2.043 0.393 3.787 1.463 5.032 2.963l0.011 0.014c0.748 0.869 1.354 1.887 1.766 2.998l0.022 0.069c-0.257-0.069-0.552-0.109-0.856-0.109-0.983 0-1.868 0.416-2.49 1.081l-0.002 0.002c-1.24 1.773 0.679 5.215 1.601 6.869 0.169 0.303 0.315 0.565 0.361 0.676 0.26 0.601 0.587 1.118 0.98 1.577l-0.007-0.008c0.087 0.109 0.171 0.214 0.236 0.306-0.501 0.144-1.401 0.478-1.319 2.146-0.015 0.195-0.053 0.558-0.104 1.018-0.054 0.269-0.098 0.597-0.123 0.93l-0.002 0.028zM14.091 17.219l-0.066 0.176c-0.137 0.328-0.279 0.745-0.397 1.172l-0.019 0.081c-0.893-0.013-1.695-0.395-2.261-1.001l-0.002-0.002c-0.632-0.667-1.020-1.57-1.020-2.564 0-0.198 0.015-0.392 0.045-0.582l-0.003 0.021c0.097-0.72 0.153-1.551 0.153-2.396 0-0.502-0.020-0.999-0.058-1.491l0.004 0.065c-0.006-0.107-0.012-0.201-0.015-0.275 0.805-0.611 1.824-0.98 2.929-0.98 0.132 0 0.262 0.005 0.391 0.015l-0.017-0.001c0.554 0.129 0.971 0.588 1.037 1.153l0.001 0.006c0.238 0.728 0.375 1.566 0.375 2.435 0 1.266-0.291 2.464-0.809 3.532l0.021-0.048c-0.105 0.233-0.204 0.453-0.289 0.682zM11.474 22.203c-0.205-0.052-0.385-0.128-0.549-0.227l0.009 0.005c0.172-0.073 0.375-0.134 0.585-0.173l0.019-0.003c1.604-0.33 1.851-0.563 2.392-1.25 0.124-0.157 0.264-0.336 0.459-0.553 0.040-0.045 0.072-0.099 0.091-0.159l0.001-0.003c0.213-0.189 0.34-0.137 0.546-0.052 0.227 0.125 0.395 0.336 0.46 0.587l0.001 0.007c0.023 0.065 0.037 0.139 0.037 0.217 0 0.125-0.035 0.242-0.095 0.341l0.002-0.003c-0.645 0.882-1.676 1.449-2.839 1.449-0.4 0-0.785-0.067-1.144-0.191l0.025 0.007zM3.967 15.846c-0.651-1.985-1.181-4.34-1.494-6.764l-0.021-0.199c-0.061-0.322-0.095-0.693-0.095-1.071 0-1.806 0.789-3.427 2.041-4.537l0.006-0.005c2.295-1.623 6.048-0.676 7.633-0.163l-0.012 0.012c-1.535 1.872-2.466 4.292-2.466 6.928 0 0.090 0.001 0.18 0.003 0.27l-0-0.013c-0 0.103 0.008 0.249 0.020 0.449 0.033 0.41 0.052 0.888 0.052 1.371 0 0.802-0.052 1.592-0.154 2.367l0.010-0.091c-0.033 0.206-0.051 0.444-0.051 0.686 0 1.231 0.482 2.35 1.269 3.177l-0.002-0.002q0.151 0.158 0.315 0.297c-0.433 0.464-1.375 1.49-2.377 2.696-0.709 0.853-1.199 0.689-1.36 0.636-0.685-0.368-1.222-0.939-1.538-1.631l-0.009-0.022c-0.684-1.252-1.286-2.708-1.73-4.232l-0.039-0.157zM30.445 19.403c-0.019-0.057-0.043-0.106-0.072-0.151l0.002 0.003c-0.174-0.329-0.596-0.427-1.259-0.29-2.066 0.426-2.866 0.164-3.156-0.024 1.617-2.452 2.918-5.292 3.751-8.326l0.049-0.209c0.339-1.313 0.997-4.403 0.153-5.913-0.059-0.112-0.122-0.208-0.192-0.298l0.003 0.004c-1.563-1.955-3.948-3.196-6.623-3.196-0.076 0-0.152 0.001-0.227 0.003l0.011-0c-0.042-0.001-0.091-0.001-0.141-0.001-1.342 0-2.633 0.22-3.838 0.625l0.085-0.025q-0.321-0.060-0.645-0.102c-0.488-0.093-1.053-0.151-1.631-0.16l-0.008-0c-0.083-0.004-0.18-0.006-0.278-0.006-1.315 0-2.538 0.394-3.557 1.071l0.024-0.015c-1.071-0.401-5.984-2.056-9.025 0.098-1.489 1.27-2.426 3.147-2.426 5.244 0 0.405 0.035 0.802 0.102 1.188l-0.006-0.041c0.335 2.698 0.879 5.126 1.632 7.461l-0.079-0.284c0.493 1.716 1.103 3.201 1.852 4.6l-0.061-0.124c0.433 0.984 1.182 1.764 2.116 2.225l0.026 0.012c0.168 0.049 0.361 0.078 0.561 0.078 0.742 0 1.392-0.391 1.756-0.979l0.005-0.009c1.001-1.204 1.987-2.282 2.43-2.758 0.502 0.279 1.097 0.451 1.731 0.471l0.006 0 0.001 0.005q-0.158 0.188-0.309 0.382c-0.424 0.538-0.512 0.649-1.875 0.93-0.388 0.080-1.418 0.292-1.433 1.014-0 0.004-0 0.008-0 0.013 0 0.147 0.043 0.284 0.117 0.399l-0.002-0.003c0.312 0.395 0.751 0.678 1.254 0.788l0.015 0.003c0.399 0.13 0.859 0.205 1.335 0.205 1.1 0 2.106-0.398 2.884-1.058l-0.006 0.005c-0.024 0.418-0.037 0.908-0.037 1.401 0 1.753 0.171 3.467 0.496 5.125l-0.027-0.167c0.382 1.373 1.616 2.367 3.084 2.38h0.002c0.369-0.003 0.726-0.046 1.070-0.124l-0.033 0.006c1.919-0.171 3.431-1.705 3.567-3.619l0.001-0.012c0.188-1.088 0.502-3.593 0.673-5.125 0.008-0.065 0.034-0.123 0.072-0.171l-0.001 0.001c0.001-0.001 0.087-0.059 0.534 0.038l0.055 0.009 0.317 0.028 0.019 0.001c0.095 0.004 0.207 0.007 0.319 0.007 1.024 0 2.002-0.2 2.895-0.564l-0.051 0.018c0.805-0.373 2.256-1.29 1.993-2.087z"></path>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 3v1"/><path d="M12 20v1"/><path d="M3 12h1"/><path d="M20 12h1"/><path d="m5.6 5.6 .7 .7"/><path d="m17.7 17.7 .7 .7"/><path d="m5.6 18.4 .7-.7"/><path d="m17.7 6.3 .7-.7"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1 -9 -9Z"/>',
  monitor: '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>',
  sparkles:
    '<path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7Z"/><path d="M5 16l.8 2.2L8 19l-2.2.8L5 22l-.8-2.2L2 19l2.2-.8Z"/><path d="M19 13l.6 1.6L21.2 15l-1.6.6L19 17.2l-.6-1.6L16.8 15l1.6-.6Z"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>',
};

function icon(name, size, extraClass) {
  const s = size || 14;
  const cls = extraClass ? ` ${extraClass}` : "";
  return `<svg class="icon${cls}" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;
}

// Returns the right brand mark for a connection type (dolphin for MySQL/
// MariaDB, elephant for PostgreSQL), falling back to a plain server glyph
// for anything unrecognized.
function dbLogo(type, size) {
  if (type === "postgres") return icon("postgresLogo", size);
  if (type === "mysql" || type === "mariadb") return icon("mysqlLogo", size);
  return icon("server", size);
}

/* =========================================================================
   API HELPERS
   ========================================================================= */
async function api(path, options) {
  const res = await fetch("/api" + path, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  let body = null;
  try {
    body = await res.json();
  } catch (e) {
    /* empty body */
  }
  if (!res.ok) {
    const message = (body && (body.error || body.message)) || `Request failed (${res.status})`;
    throw new Error(message);
  }
  return body;
}

/* =========================================================================
   STATE
   ========================================================================= */
let connections = [];
let tabs = [];
let activeTabId = null;
let history = [];
let tabSeq = 0;
let sessionTab = "chat";

function getActiveTab() {
  return tabs.find((t) => t.id === activeTabId) || null;
}

function makeBlankTab() {
  tabSeq++;
  return {
    id: "tab" + tabSeq,
    title: "Query " + tabSeq,
    connId: null,
    dbName: "",
    query: "SELECT *\nFROM your_table\nLIMIT 100;",
    result: null,
    view: "table",
    running: false,
    fileHandle: null, // FileSystemFileHandle when saved/opened via the native picker (Chromium only)
    boundFilename: null, // filename this tab is linked to, so Save doesn't re-prompt
    dirty: false, // true when the query has changed since the last save to boundFilename
  };
}

function makeFilledTab(connId, dbName, query, title) {
  tabSeq++;
  return {
    id: "tab" + tabSeq,
    title: title || "Query " + tabSeq,
    connId: connId || null,
    dbName: dbName || "",
    query: query || "SELECT *\nFROM your_table\nLIMIT 100;",
    result: null,
    view: "table",
    running: false,
    fileHandle: null,
    boundFilename: null,
    dirty: false,
  };
}

function openNewTab(tab) {
  tabs.push(tab);
  activeTabId = tab.id;
  renderTabs();
  refreshWorkbench();
  persistSession();
}

/* =========================================================================
   AUTOSAVE (localStorage) — remembers open tabs (title, query, target,
   view, bound filename) across page reloads. A live fileHandle can't be
   serialized, so after a reload the app still remembers the filename but
   Save will re-prompt once to reacquire a handle (browser security limit).
   ========================================================================= */
const SESSION_KEY = "querybench.session.v1";
let persistTimer = null;

function persistSession() {
  try {
    const payload = {
      activeTabId,
      tabs: tabs.map((t) => ({
        id: t.id,
        title: t.title,
        connId: t.connId,
        dbName: t.dbName,
        query: t.query,
        view: t.view,
        boundFilename: t.boundFilename || null,
      })),
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(payload));
  } catch (e) {
    /* storage unavailable/full — not critical, ignore */
  }
}

function schedulePersist() {
  clearTimeout(persistTimer);
  persistTimer = setTimeout(persistSession, 400);
}

function restoreSession() {
  let raw;
  try {
    raw = localStorage.getItem(SESSION_KEY);
  } catch (e) {
    return false;
  }
  if (!raw) return false;
  try {
    const payload = JSON.parse(raw);
    if (!payload || !Array.isArray(payload.tabs) || payload.tabs.length === 0) return false;
    tabs = payload.tabs.map((t) => ({
      id: t.id,
      title: t.title || "Query",
      connId: t.connId || null,
      dbName: t.dbName || "",
      query: t.query || "",
      result: null,
      view: t.view === "json" ? "json" : "table",
      running: false,
      fileHandle: null,
      boundFilename: t.boundFilename || null,
      dirty: false,
    }));
    tabs.forEach((t) => {
      const m = /^tab(\d+)$/.exec(t.id);
      if (m) tabSeq = Math.max(tabSeq, parseInt(m[1], 10));
    });
    activeTabId = tabs.some((t) => t.id === payload.activeTabId) ? payload.activeTabId : tabs[0].id;
    return true;
  } catch (e) {
    return false;
  }
}

/* =========================================================================
   RENDER: connection tree
   ========================================================================= */
function findConn(id) {
  return connections.find((c) => c.id === id);
}

function cssEscape(s) {
  return window.CSS && CSS.escape ? CSS.escape(s) : s.replace(/[^a-zA-Z0-9_-]/g, "\\$&");
}

function highlightActiveTreeRow() {
  document.querySelectorAll(".tree-row.is-active").forEach((el) => el.classList.remove("is-active"));
  const tab = getActiveTab();
  if (!tab || !tab.connId) return;
  const connEl = document.querySelector(`[data-conn-row="${cssEscape(tab.connId)}"]`);
  if (connEl) connEl.classList.add("is-active");
  if (tab.dbName) {
    const dbEl = document.querySelector(`[data-db-row="${cssEscape(tab.connId + "::" + tab.dbName)}"]`);
    if (dbEl) dbEl.classList.add("is-active");
  }
}

function setActiveTarget(connId, dbName) {
  let tab = getActiveTab();
  if (!tab) {
    // Selecting a database (via the tree or the topbar dropdown) should
    // activate a connection immediately, even if no tab is open yet —
    // it shouldn't require clicking "+" first.
    tab = makeBlankTab();
    tabs.push(tab);
    activeTabId = tab.id;
    renderTabs();
  }
  tab.connId = connId;
  tab.dbName = dbName || "";
  hideAutocomplete();
  refreshWorkbench();
  persistSession();
}

function renderTree() {
  const root = document.getElementById("connectionTree");
  root.innerHTML = "";

  if (connections.length === 0) {
    root.innerHTML = `<div class="tree-empty" style="padding:16px 10px;">No connections yet. Use "Add connection" below to connect to a MySQL or Postgres server.</div>`;
    renderConnectionsRail();
    return;
  }

  connections.forEach((conn) => {
    const group = document.createElement("div");
    group.className = "conn-group";

    const connRow = document.createElement("div");
    connRow.className = "tree-row";
    connRow.dataset.connRow = conn.id;
    connRow.innerHTML = `
<span class="tree-toggle" data-role="toggle">${icon("chevronRight", 10)}</span>
<span class="tree-icon icon-conn-${conn.type}">${dbLogo(conn.type, 13)}</span>
<span class="tree-label">${escapeHtml(conn.name)}</span>
<span class="tree-meta">${escapeHtml(conn.host)}</span>
<span class="tree-remove" data-role="remove" title="Remove connection">${icon("x", 11)}</span>`;
    group.appendChild(connRow);

    const dbWrap = document.createElement("div");
    dbWrap.className = "tree-children";
    const dbInner = document.createElement("div");
    dbInner.className = "tree-children-inner";
    dbInner.innerHTML = `<div class="tree-empty">Click to load databases…</div>`;
    dbWrap.appendChild(dbInner);
    group.appendChild(dbWrap);

    connRow.addEventListener("click", async (e) => {
      if (e.target.closest('[data-role="remove"]')) {
        e.stopPropagation();
        removeConnection(conn.id);
        return;
      }
      const willOpen = !dbWrap.classList.contains("open");
      connRow.querySelector('[data-role="toggle"]').classList.toggle("open", willOpen);
      dbWrap.classList.toggle("open", willOpen);
      if (willOpen && !conn.databases) {
        dbInner.innerHTML = `<div class="tree-empty">Loading databases…</div>`;
        try {
          const dbNames = await api(`/connections/${conn.id}/databases`);
          conn.databases = dbNames.map((name) => ({ name, tables: null }));
          renderDatabaseList(conn, dbInner);
          highlightActiveTreeRow();
        } catch (err) {
          dbInner.innerHTML = `<div class="tree-empty" style="color:var(--error);">Could not load databases: ${escapeHtml(err.message)}</div>`;
        }
      }
    });

    root.appendChild(group);
  });

  highlightActiveTreeRow();
  renderConnectionsRail();
}

function renderDatabaseList(conn, container) {
  container.innerHTML = "";
  if (conn.databases.length === 0) {
    container.innerHTML = `<div class="tree-empty">No databases visible on this connection.</div>`;
    return;
  }
  conn.databases.forEach((db) => {
    const dbBlock = document.createElement("div");
    const dbRow = document.createElement("div");
    dbRow.className = "tree-row";
    dbRow.dataset.dbRow = `${conn.id}::${db.name}`;
    dbRow.innerHTML = `
<span class="tree-toggle" data-role="toggle">${icon("chevronRight", 10)}</span>
<span class="tree-icon icon-db">${icon("database", 13)}</span>
<span class="tree-label">${escapeHtml(db.name)}</span>`;
    dbBlock.appendChild(dbRow);

    const tblWrap = document.createElement("div");
    tblWrap.className = "tree-children";
    const tblInner = document.createElement("div");
    tblInner.className = "tree-children-inner";
    tblInner.innerHTML = `<div class="tree-empty">Click to load tables…</div>`;
    tblWrap.appendChild(tblInner);
    dbBlock.appendChild(tblWrap);

    dbRow.addEventListener("click", async () => {
      setActiveTarget(conn.id, db.name);

      const willOpen = !tblWrap.classList.contains("open");
      dbRow.querySelector('[data-role="toggle"]').classList.toggle("open", willOpen);
      tblWrap.classList.toggle("open", willOpen);
      if (willOpen && db.tables === null) {
        tblInner.innerHTML = `<div class="tree-empty">Loading tables…</div>`;
        try {
          const tables = await api(`/connections/${conn.id}/databases/${encodeURIComponent(db.name)}/tables`);
          db.tables = tables;
          dbTablesCache.set(`${conn.id}::${db.name}`, tables);
          renderTableList(conn, db, tblInner);
        } catch (err) {
          tblInner.innerHTML = `<div class="tree-empty" style="color:var(--error);">Could not load tables: ${escapeHtml(err.message)}</div>`;
        }
      }
    });

    container.appendChild(dbBlock);
  });
}

function renderTableList(conn, db, container) {
  container.innerHTML = "";
  if (db.tables.length === 0) {
    container.innerHTML = `<div class="tree-empty">No tables in this database.</div>`;
    return;
  }
  db.tables.forEach((t) => {
    const tRow = document.createElement("div");
    tRow.className = "tree-row";
    tRow.innerHTML = `<span class="tree-toggle" style="visibility:hidden">${icon("chevronRight", 10)}</span>
<span class="tree-icon icon-table">${icon("table", 13)}</span>
<span class="tree-label">${escapeHtml(t)}</span>`;
    tRow.addEventListener("click", (e) => {
      e.stopPropagation();
      openTablePreview(conn.id, db.name, t);
    });
    container.appendChild(tRow);
  });
}

async function removeConnection(connId) {
  if (!confirm("Remove this connection? Saved credentials will be deleted.")) return;
  try {
    await api(`/connections/${connId}`, { method: "DELETE" });
    connections = connections.filter((c) => c.id !== connId);
    renderTree();
    renderConnectionSelect();
  } catch (err) {
    alert("Could not remove connection: " + err.message);
  }
}

function openTablePreview(connId, dbName, tableName) {
  const safeName = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(tableName) ? tableName : `"${tableName}"`;
  const query = `SELECT *\nFROM ${safeName}\nLIMIT 100;`;
  const tab = makeFilledTab(connId, dbName, query, tableName);
  openNewTab(tab);
  runQuery(tab, query);
}

/* =========================================================================
   RENDER: tabs
   ========================================================================= */
function renderTabs() {
  const bar = document.getElementById("tabbar");
  bar.innerHTML = "";
  tabs.forEach((tab) => {
    const el = document.createElement("div");
    el.className = "tab" + (tab.id === activeTabId ? " is-active" : "");
    const dotClass = tab.running
      ? "idle"
      : !tab.result
        ? "idle"
        : tab.result.status === "success"
          ? "success"
          : "error";
    const showDirty = (tab.fileHandle || tab.boundFilename) && tab.dirty;
    el.innerHTML = `<span class="dot ${dotClass}"></span>${showDirty ? '<span class="tab-dirty" title="Unsaved changes"></span>' : ""}<span class="tab-label">${escapeHtml(tab.title)}</span><span class="tab-close" data-role="close">${icon("x", 11)}</span>`;
    el.addEventListener("click", (e) => {
      if (e.target.closest('[data-role="close"]')) {
        closeTab(tab.id);
        return;
      }
      switchTab(tab.id);
    });
    bar.appendChild(el);
  });
  const addBtn = document.createElement("div");
  addBtn.className = "tab-add";
  addBtn.innerHTML = icon("plus", 15);
  addBtn.title = "New query tab";
  addBtn.addEventListener("click", () => openNewTab(makeBlankTab()));
  bar.appendChild(addBtn);
}

function switchTab(id) {
  activeTabId = id;
  hideAutocomplete();
  renderTabs();
  refreshWorkbench();
  persistSession();
}

function closeTab(id) {
  const idx = tabs.findIndex((t) => t.id === id);
  if (idx === -1) return;
  tabs.splice(idx, 1);
  if (activeTabId === id) {
    const next = tabs[Math.min(idx, tabs.length - 1)];
    activeTabId = next ? next.id : null;
  }
  hideAutocomplete();
  renderTabs();
  refreshWorkbench();
  persistSession();
}

/* =========================================================================
   WORKBENCH REFRESH
   ========================================================================= */
// Save/Format/Clear/Run act on the current tab's content, so they need one
// open. Open .sql and the connection selector are entry points that create
// or target a tab themselves, so they stay usable even with none open.
const TOOLBAR_BUTTON_IDS = ["runBtn", "formatBtn", "clearBtn", "saveFileBtn"];

function updateSaveButtonLabel(tab) {
  const label = document.getElementById("saveFileLabel");
  if (!tab) {
    label.textContent = "Save .sql";
    return;
  }
  label.textContent = tab.fileHandle || tab.boundFilename ? "Save" : "Save .sql";
}

function refreshWorkbench() {
  const tab = getActiveTab();

  TOOLBAR_BUTTON_IDS.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.disabled = !tab;
  });
  updateSaveButtonLabel(tab);

  if (!tab) {
    document.getElementById("tabTargetLabel").textContent = "No tab open";
    codeInput.value = "";
    codeInput.disabled = true;
    refreshHighlight();
    refreshGutter();
    document.getElementById("copyResultBtn").disabled = true;
    document.getElementById("exportCsv").disabled = true;
    document.getElementById("exportJson").disabled = true;
    setStatus("idle", "No tab open");
    document.getElementById("resultsBody").innerHTML = `<div class="empty-state">
${icon("filePlus", 30)}
<div class="title">No query tab open</div>
<div class="sub">Click "+" in the tab bar to start a new query, or pick a table from the sidebar.</div>
</div>`;
    highlightActiveTreeRow();
    return;
  }

  codeInput.disabled = false;
  loadTabIntoEditor(tab);
  const conn = findConn(tab.connId);
  document.getElementById("tabTargetLabel").textContent = conn
    ? `${conn.name} · ${tab.dbName || "no database"}`
    : "No connection selected";
  const select = document.getElementById("connectionSelect");
  select.value = conn ? conn.id : "";
  renderResults(tab);
  highlightActiveTreeRow();
}

/* =========================================================================
   CONNECTION SELECT (topbar)
   ========================================================================= */
function renderConnectionSelect() {
  const select = document.getElementById("connectionSelect");
  select.innerHTML = "";
  if (connections.length === 0) {
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "No connections yet";
    select.appendChild(opt);
  } else {
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select a connection…";
    select.appendChild(placeholder);
  }
  connections.forEach((conn) => {
    const opt = document.createElement("option");
    opt.value = conn.id;
    opt.textContent = `${conn.name} (${conn.type})`;
    select.appendChild(opt);
  });
  const addOpt = document.createElement("option");
  addOpt.value = "__add__";
  addOpt.textContent = "+ Add new connection…";
  select.appendChild(addOpt);

  const tab = getActiveTab();
  select.value = tab && tab.connId ? tab.connId : "";
}

document.getElementById("connectionSelect").addEventListener("change", (e) => {
  const value = e.target.value;
  const tab = getActiveTab();
  if (value === "__add__") {
    openModal();
    if (tab) e.target.value = tab.connId || "";
    return;
  }
  if (!value) return;
  const conn = findConn(value);
  const dbName = conn && conn.databases && conn.databases[0] ? conn.databases[0].name : "";
  setActiveTarget(value, dbName);
});

/* =========================================================================
   CODE EDITOR (textarea + highlight overlay)
   ========================================================================= */
const codeInput = document.getElementById("codeInput");
const highlightLayer = document.getElementById("highlightLayer");
const gutter = document.getElementById("gutter");
const LINE_HEIGHT = 20; // must match .code-input / .code-highlight line-height in CSS

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function highlightSql(text) {
  let out = escapeHtml(text);
  out = out.replace(/(--[^\n]*)/g, '<span class="cmt">$1</span>');
  out = out.replace(/('(?:[^'\\]|\\.)*')/g, '<span class="str">$1</span>');
  out = out.replace(/\b(\d+(\.\d+)?)\b/g, '<span class="num">$1</span>');
  const kwPattern = new RegExp("\\b(" + KEYWORDS.join("|") + ")\\b", "gi");
  out = out.replace(kwPattern, '<span class="kw">$1</span>');
  out = out.replace(/\b([A-Za-z_][A-Za-z0-9_]*)\s*(?=\()/g, '<span class="fn">$1</span>');
  return out + "\n";
}

function refreshHighlight() {
  highlightLayer.innerHTML = highlightSql(codeInput.value);
}

function refreshGutter() {
  const lines = codeInput.value.split("\n").length;
  let html = "";
  for (let i = 1; i <= lines; i++) html += `<div>${i}</div>`;
  gutter.innerHTML = html;
}

function loadTabIntoEditor(tab) {
  codeInput.value = tab.query;
  refreshHighlight();
  refreshGutter();
}

function markTabDirty(tab) {
  if (!tab.fileHandle && !tab.boundFilename) return; // nothing saved yet — dirty indicator not meaningful
  if (tab.dirty) return; // already shown
  tab.dirty = true;
  const tabEl = document.querySelector(".tab.is-active");
  if (tabEl && !tabEl.querySelector(".tab-dirty")) {
    const dot = document.createElement("span");
    dot.className = "tab-dirty";
    dot.title = "Unsaved changes";
    tabEl.insertBefore(dot, tabEl.querySelector(".tab-label"));
  }
}

codeInput.addEventListener("input", () => {
  refreshHighlight();
  refreshGutter();
  const tab = getActiveTab();
  if (tab) {
    tab.query = codeInput.value;
    markTabDirty(tab);
  }
  schedulePersist();
  updateAutocomplete();
});
codeInput.addEventListener("scroll", () => {
  highlightLayer.scrollTop = codeInput.scrollTop;
  highlightLayer.scrollLeft = codeInput.scrollLeft;
  gutter.scrollTop = codeInput.scrollTop;
  hideAutocomplete();
});
codeInput.addEventListener("click", () => {
  updateAutocomplete();
});
codeInput.addEventListener("blur", () => {
  setTimeout(hideAutocomplete, 120);
});

codeInput.addEventListener("keydown", (e) => {
  if (acState.visible) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      acMoveActive(1);
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      acMoveActive(-1);
      return;
    }
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      acceptSuggestion(acState.activeIndex);
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      hideAutocomplete();
      return;
    }
  }
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    e.preventDefault();
    const tab = getActiveTab();
    if (tab) runQuery(tab, codeInput.value);
    return;
  }
  if (e.key === "Tab") {
    e.preventDefault();
    const start = codeInput.selectionStart,
      end = codeInput.selectionEnd;
    codeInput.value = codeInput.value.slice(0, start) + "  " + codeInput.value.slice(end);
    codeInput.selectionStart = codeInput.selectionEnd = start + 2;
    codeInput.dispatchEvent(new Event("input"));
  }
});

document.getElementById("formatBtn").addEventListener("click", () => {
  if (!getActiveTab()) return;
  hideAutocomplete();
  let v = codeInput.value;
  KEYWORDS.forEach((k) => {
    v = v.replace(new RegExp("\\b" + k + "\\b", "gi"), k);
  });
  codeInput.value = v;
  codeInput.dispatchEvent(new Event("input"));
});
document.getElementById("clearBtn").addEventListener("click", () => {
  if (!getActiveTab()) return;
  hideAutocomplete();
  codeInput.value = "";
  codeInput.dispatchEvent(new Event("input"));
  codeInput.focus();
});

/* =========================================================================
   AUTOCOMPLETE — schema-aware suggestions for keywords, tables, and columns
   (with type + primary-key info) pulled from the connected database.
   ========================================================================= */
const dbTablesCache = new Map(); // `${connId}::${db}` -> [tableName, ...]
const tableColumnsCache = new Map(); // `${connId}::${db}::${table}` -> [{name,dataType,isPrimaryKey}, ...]
let acRequestSeq = 0;
const acState = { visible: false, items: [], activeIndex: 0, wordStart: 0, wordEnd: 0 };

async function getTablesCached(connId, dbName) {
  const key = `${connId}::${dbName}`;
  if (dbTablesCache.has(key)) return dbTablesCache.get(key);
  try {
    const tables = await api(`/connections/${connId}/databases/${encodeURIComponent(dbName)}/tables`);
    dbTablesCache.set(key, tables);
    return tables;
  } catch (e) {
    return [];
  }
}

async function getColumnsCached(connId, dbName, table) {
  const key = `${connId}::${dbName}::${table}`;
  if (tableColumnsCache.has(key)) return tableColumnsCache.get(key);
  try {
    const cols = await api(
      `/connections/${connId}/databases/${encodeURIComponent(dbName)}/tables/${encodeURIComponent(table)}/columns`,
    );
    tableColumnsCache.set(key, cols);
    return cols;
  } catch (e) {
    return [];
  }
}

function extractReferencedTables(sql) {
  const names = new Set();
  const re = /\b(?:FROM|JOIN)\s+(?:["`]?[a-zA-Z_][a-zA-Z0-9_]*["`]?\.)?["`]?([a-zA-Z_][a-zA-Z0-9_]*)["`]?/gi;
  let m;
  while ((m = re.exec(sql))) {
    names.add(m[1]);
  }
  return Array.from(names);
}

function getCurrentWordInfo() {
  if (codeInput.selectionStart !== codeInput.selectionEnd) return null;
  const value = codeInput.value;
  const pos = codeInput.selectionStart;
  let start = pos;
  while (start > 0 && /[A-Za-z0-9_]/.test(value[start - 1])) start--;
  return { word: value.slice(start, pos), start, end: pos };
}

function precedingKeyword(value, wordStart) {
  const before = value.slice(0, wordStart).trimEnd();
  const m = /([A-Za-z_][A-Za-z0-9_]*)\s*$/.exec(before);
  return m ? m[1].toUpperCase() : "";
}

async function updateAutocomplete() {
  const myReq = ++acRequestSeq;
  const tab = getActiveTab();
  if (!tab) {
    hideAutocomplete();
    return;
  }
  const info = getCurrentWordInfo();
  if (!info || info.word.length === 0) {
    hideAutocomplete();
    return;
  }
  const word = info.word;
  const wordLower = word.toLowerCase();
  const prevKw = precedingKeyword(codeInput.value, info.start);

  let items = [];
  const tableTriggers = ["FROM", "JOIN", "INTO", "UPDATE"];

  if (tableTriggers.includes(prevKw)) {
    if (tab.connId && tab.dbName) {
      const tables = await getTablesCached(tab.connId, tab.dbName);
      if (myReq !== acRequestSeq) return;
      items = tables.filter((t) => t.toLowerCase().startsWith(wordLower)).map((t) => ({ kind: "table", name: t }));
    }
  } else {
    if (tab.connId && tab.dbName) {
      const refTables = extractReferencedTables(codeInput.value);
      for (const t of refTables) {
        const cols = await getColumnsCached(tab.connId, tab.dbName, t);
        if (myReq !== acRequestSeq) return;
        cols.forEach((c) => {
          if (c.name.toLowerCase().startsWith(wordLower)) {
            items.push({ kind: "column", name: c.name, dataType: c.dataType, isPrimaryKey: c.isPrimaryKey, table: t });
          }
        });
      }
      const allTables = await getTablesCached(tab.connId, tab.dbName);
      if (myReq !== acRequestSeq) return;
      allTables
        .filter((t) => t.toLowerCase().startsWith(wordLower))
        .forEach((t) => items.push({ kind: "table", name: t }));
    }
    KEYWORDS.filter((k) => k.toLowerCase().startsWith(wordLower)).forEach((k) =>
      items.push({ kind: "keyword", name: k }),
    );
  }

  const seen = new Set();
  items = items
    .filter((i) => {
      const key = i.kind + ":" + i.name;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 40);

  if (items.length === 0) {
    hideAutocomplete();
    return;
  }

  acState.items = items;
  acState.activeIndex = 0;
  acState.wordStart = info.start;
  acState.wordEnd = info.end;
  renderAutocomplete(word);
}

function acIconFor(item) {
  if (item.kind === "table") return icon("table", 12, "ac-icon-table");
  if (item.kind === "keyword") return icon("keyword", 12, "ac-icon-kw");
  if (item.isPrimaryKey) return icon("key", 12, "ac-icon-pk");
  const t = (item.dataType || "").toLowerCase();
  if (/int|decimal|numeric|float|double|real|serial/.test(t)) return icon("diamond", 10, "ac-icon-num");
  if (/date|time/.test(t)) return icon("diamond", 10, "ac-icon-date");
  if (/char|text|uuid|json|enum/.test(t)) return icon("diamond", 10, "ac-icon-str");
  if (/bool|tinyint/.test(t)) return icon("diamond", 10, "ac-icon-bool");
  return icon("diamond", 10, "ac-icon-default");
}

function acTypeLabel(item) {
  if (item.kind === "table") return "table";
  if (item.kind === "keyword") return "keyword";
  return item.dataType || "";
}

function highlightMatch(name, word) {
  if (word && name.toLowerCase().startsWith(word.toLowerCase())) {
    return `<b>${escapeHtml(name.slice(0, word.length))}</b>${escapeHtml(name.slice(word.length))}`;
  }
  return escapeHtml(name);
}

function renderAutocomplete(currentWord) {
  const popup = document.getElementById("autocompletePopup");
  popup.innerHTML = acState.items
    .map((item, i) => {
      const sourceHtml = item.kind === "column" ? `<span class="ac-source">${escapeHtml(item.table)}</span>` : "";
      return `<div class="ac-item${i === acState.activeIndex ? " is-active" : ""}" data-index="${i}">
<span class="ac-icon">${acIconFor(item)}</span>
<span class="ac-type">${escapeHtml(acTypeLabel(item))}</span>
<span class="ac-name">${highlightMatch(item.name, currentWord)}</span>
${sourceHtml}
</div>`;
    })
    .join("");

  popup.querySelectorAll(".ac-item").forEach((el) => {
    el.addEventListener("mousedown", (e) => {
      e.preventDefault();
      acceptSuggestion(Number(el.dataset.index));
    });
  });

  positionAutocomplete();
  popup.style.display = "block";
  acState.visible = true;
}

function acMoveActive(delta) {
  const n = acState.items.length;
  acState.activeIndex = (acState.activeIndex + delta + n) % n;
  document.querySelectorAll("#autocompletePopup .ac-item").forEach((el) => {
    el.classList.toggle("is-active", Number(el.dataset.index) === acState.activeIndex);
  });
  const activeEl = document.querySelector(`#autocompletePopup .ac-item[data-index="${acState.activeIndex}"]`);
  if (activeEl) activeEl.scrollIntoView({ block: "nearest" });
}

function acceptSuggestion(idx) {
  const item = acState.items[idx];
  if (!item) return;
  const value = codeInput.value;
  const newValue = value.slice(0, acState.wordStart) + item.name + value.slice(acState.wordEnd);
  codeInput.value = newValue;
  const newCaret = acState.wordStart + item.name.length;
  codeInput.selectionStart = codeInput.selectionEnd = newCaret;
  hideAutocomplete();
  codeInput.dispatchEvent(new Event("input"));
  codeInput.focus();
}

function hideAutocomplete() {
  acState.visible = false;
  acState.items = [];
  const popup = document.getElementById("autocompletePopup");
  popup.style.display = "none";
  popup.innerHTML = "";
}

// Mirror-div technique to translate a caret text-offset into pixel coordinates
// within the textarea, so the popup can be positioned right under the cursor.
function getCaretPixelPosition(textarea, position) {
  const mirror = document.createElement("div");
  const style = getComputedStyle(textarea);
  const props = [
    "boxSizing",
    "width",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "borderTopWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "borderLeftWidth",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "fontStyle",
    "letterSpacing",
    "textTransform",
    "wordSpacing",
    "lineHeight",
    "whiteSpace",
    "wordWrap",
    "wordBreak",
  ];
  props.forEach((p) => {
    mirror.style[p] = style[p];
  });
  mirror.style.position = "absolute";
  mirror.style.visibility = "hidden";
  mirror.style.whiteSpace = "pre-wrap";
  mirror.style.wordWrap = "break-word";
  mirror.style.top = "0px";
  mirror.style.left = "-99999px";
  mirror.style.height = "auto";
  document.body.appendChild(mirror);

  mirror.textContent = textarea.value.substring(0, position);
  const marker = document.createElement("span");
  marker.textContent = "\u200b";
  mirror.appendChild(marker);

  const top = marker.offsetTop;
  const left = marker.offsetLeft;
  document.body.removeChild(mirror);
  return { top, left };
}

function positionAutocomplete() {
  const popup = document.getElementById("autocompletePopup");
  const pos = getCaretPixelPosition(codeInput, acState.wordStart);
  const editorShell = document.querySelector(".editor-shell");
  const shellHeight = editorShell.getBoundingClientRect().height;
  const areaWidth = codeInput.getBoundingClientRect().width;

  let top = pos.top - codeInput.scrollTop + LINE_HEIGHT;
  let left = pos.left - codeInput.scrollLeft;

  if (top > shellHeight - 60) {
    top = Math.max(0, pos.top - codeInput.scrollTop - 210);
  }
  if (left > areaWidth - 240) left = Math.max(0, areaWidth - 240);
  if (top < 0) top = 0;
  if (left < 0) left = 0;

  popup.style.top = top + "px";
  popup.style.left = left + "px";
}

/* =========================================================================
   OPEN / SAVE .sql FILES
   In Chromium browsers (secure context — HTTPS or localhost), this uses the
   File System Access API so Save writes directly back to the same file on
   disk once it's linked, no re-prompting. Firefox/Safari/non-secure
   contexts fall back to a one-time filename prompt + browser download,
   remembering the name so later saves don't ask again (though each save
   still produces a new download rather than a true in-place update — that
   part of the API isn't available outside Chromium).
   ========================================================================= */
function sanitizeFilename(name) {
  return name.replace(/[\\/:*?"<>|]/g, "_").trim() || "query";
}

function flashLabel(el, text, ms) {
  const original = el.textContent;
  el.textContent = text;
  setTimeout(() => {
    el.textContent = original;
  }, ms || 1100);
}

// Chrome can require write permission on a file handle to be re-confirmed
// (a lightweight inline prompt, not a file picker) if it's not already in
// the 'granted' state. Checking this explicitly avoids createWritable()
// throwing and falling back to a fresh save-as picker unnecessarily.
async function verifyWritePermission(handle) {
  const opts = { mode: "readwrite" };
  if ((await handle.queryPermission(opts)) === "granted") return true;
  if ((await handle.requestPermission(opts)) === "granted") return true;
  return false;
}

async function saveTabToFile(tab) {
  const label = document.getElementById("saveFileLabel");

  if (tab.fileHandle) {
    try {
      const allowed = await verifyWritePermission(tab.fileHandle);
      if (!allowed) throw new Error("Write permission was not granted for the linked file.");
      const writable = await tab.fileHandle.createWritable();
      await writable.write(tab.query);
      await writable.close();
      tab.dirty = false;
      renderTabs();
      flashLabel(label, "Saved!", 1100);
    } catch (err) {
      tab.fileHandle = null;
      alert(
        `Could not update the linked file directly (${err.message}). It may have been moved, renamed, or deleted — choose a location to save again.`,
      );
      await saveTabToFile(tab);
    }
    return;
  }

  if (window.showSaveFilePicker) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: `${tab.title || "query"}.sql`,
        types: [{ description: "SQL file", accept: { "application/sql": [".sql"] } }],
      });
      tab.fileHandle = handle;
      tab.boundFilename = handle.name;
      tab.title = handle.name.replace(/\.sql$/i, "");
      const writable = await handle.createWritable();
      await writable.write(tab.query);
      await writable.close();
      tab.dirty = false;
      renderTabs();
      updateSaveButtonLabel(tab);
      persistSession();
      flashLabel(label, "Saved!", 1100);
    } catch (err) {
      if (err && err.name !== "AbortError") alert("Could not save file: " + err.message);
    }
    return;
  }

  // Fallback: no File System Access API available.
  if (tab.boundFilename) {
    downloadBlob(tab.query, tab.boundFilename, "application/sql");
    tab.dirty = false;
    renderTabs();
    flashLabel(label, "Downloaded", 1100);
    return;
  }
  const input = prompt("Save as filename (without extension):", tab.title || "query");
  if (input === null) return;
  const clean = sanitizeFilename(input);
  tab.title = clean;
  tab.boundFilename = `${clean}.sql`;
  tab.dirty = false;
  renderTabs();
  updateSaveButtonLabel(tab);
  persistSession();
  downloadBlob(tab.query, tab.boundFilename, "application/sql");
  flashLabel(label, "Downloaded", 1100);
}

document.getElementById("saveFileBtn").addEventListener("click", () => {
  const tab = getActiveTab();
  if (tab) saveTabToFile(tab);
});

document.getElementById("openFileBtn").addEventListener("click", async () => {
  if (window.showOpenFilePicker) {
    try {
      const [handle] = await window.showOpenFilePicker({
        types: [{ description: "SQL file", accept: { "application/sql": [".sql"], "text/plain": [".txt"] } }],
      });
      const file = await handle.getFile();
      const text = await file.text();
      const title = handle.name.replace(/\.sql$|\.txt$/i, "") || "Imported";
      const tab = makeFilledTab(null, "", text, title);
      // Ask for write access now, while opening, so Save can write straight
      // back to this file later without needing a separate permission step.
      await verifyWritePermission(handle).catch(() => false);
      tab.fileHandle = handle;
      tab.boundFilename = handle.name;
      openNewTab(tab);
    } catch (err) {
      if (err && err.name !== "AbortError") alert("Could not open file: " + err.message);
    }
    return;
  }
  // Fallback: plain file input (Firefox/Safari/non-secure contexts) — read-only, no live handle.
  document.getElementById("openFileInput").click();
});
document.getElementById("openFileInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const title = file.name.replace(/\.sql$|\.txt$/i, "") || "Imported";
    const tab = makeFilledTab(null, "", String(reader.result), title);
    tab.boundFilename = /\.(sql|txt)$/i.test(file.name) ? file.name : `${title}.sql`;
    openNewTab(tab);
  };
  reader.onerror = () => alert("Could not read that file.");
  reader.readAsText(file);
  e.target.value = "";
});

/* =========================================================================
   QUERY EXECUTION (real API call)
   ========================================================================= */
async function runQuery(tab, sqlOverride) {
  hideAutocomplete();
  const sql = sqlOverride !== undefined ? sqlOverride : codeInput.value;
  tab.query = sql;
  if (!tab.connId) {
    tab.result = {
      status: "error",
      message: "Pick a connection first — use the dropdown at the top, or click a database in the sidebar.",
    };
    if (tab.id === activeTabId) renderResults(tab);
    renderTabs();
    return;
  }
  const conn = findConn(tab.connId);

  tab.running = true;
  renderTabs();
  if (tab.id === activeTabId) {
    setStatus("running", "Running…");
    document.getElementById("resultsBody").innerHTML =
      `<div class="empty-state">${icon("loader", 26, "icon-spin")}<div class="title">Executing query</div><div class="sub">Talking to ${conn ? escapeHtml(conn.name) : "connection"} / ${escapeHtml(tab.dbName || "")}</div></div>`;
  }

  try {
    const data = await api("/query", {
      method: "POST",
      body: JSON.stringify({ connectionId: tab.connId, database: tab.dbName, sql }),
    });
    tab.result = {
      status: "success",
      columns: data.columns,
      rows: data.rows,
      ms: data.ms,
      rowCount: data.rowCount,
      truncated: data.truncated,
    };
  } catch (err) {
    tab.result = { status: "error", message: err.message };
  }
  tab.running = false;
  renderTabs();
  if (tab.id === activeTabId) renderResults(tab);
  loadHistory();
}

document.getElementById("runBtn").addEventListener("click", () => {
  const tab = getActiveTab();
  if (tab) runQuery(tab, codeInput.value);
});

/* Responsive header menu */
const mobileConnectionSelect = document.getElementById("mobileConnectionSelect");
const mobileThemeSelect = document.getElementById("mobileThemeSelect");
const mobileThemeIcon = document.getElementById("mobileThemeIcon");
const headerMore = document.getElementById("headerMore");
const headerMoreBtn = document.getElementById("headerMoreBtn");
const connectionSelect = document.getElementById("connectionSelect");
const themeSelect = document.getElementById("themeSelect");

function syncMobileHeader() {
  if (mobileConnectionSelect && connectionSelect) {
    mobileConnectionSelect.innerHTML = connectionSelect.innerHTML;
    mobileConnectionSelect.value = connectionSelect.value;
  }
  if (mobileThemeSelect && themeSelect) {
    mobileThemeSelect.value = themeSelect.value;
    if (mobileThemeIcon) mobileThemeIcon.innerHTML = document.getElementById("themeIcon").innerHTML;
  }
}

mobileConnectionSelect?.addEventListener("change", () => {
  connectionSelect.value = mobileConnectionSelect.value;
  connectionSelect.dispatchEvent(new Event("change", { bubbles: true }));
});
mobileThemeSelect?.addEventListener("change", () => {
  themeSelect.value = mobileThemeSelect.value;
  themeSelect.dispatchEvent(new Event("change", { bubbles: true }));
  syncMobileHeader();
});
connectionSelect?.addEventListener("change", syncMobileHeader);
themeSelect?.addEventListener("change", syncMobileHeader);

headerMoreBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = headerMore.classList.toggle("open");
  headerMoreBtn.setAttribute("aria-expanded", String(open));
  if (open) syncMobileHeader();
});

document.addEventListener("click", (e) => {
  if (!headerMore?.contains(e.target)) {
    headerMore?.classList.remove("open");
    headerMoreBtn?.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    headerMore?.classList.remove("open");
    headerMoreBtn?.setAttribute("aria-expanded", "false");
  }
});

/* Compact toolbar menu for tablet/mobile */
const toolbarMore = document.getElementById("toolbarMore");
const toolbarMoreBtn = document.getElementById("toolbarMoreBtn");

toolbarMoreBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = toolbarMore.classList.toggle("open");
  toolbarMoreBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

document.querySelectorAll("[data-toolbar-action]").forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    const target = document.getElementById(menuItem.dataset.toolbarAction);
    if (target && !target.disabled) {
      target.click();
    }
    toolbarMore.classList.remove("open");
    toolbarMoreBtn.setAttribute("aria-expanded", "false");
  });
});

/* Show workspace panels from the compact toolbar menu. On desktop this
   expands the existing sidebars; on tablet/mobile the selected panel
   opens as an overlay so the SQL workbench stays usable underneath. */
function showToolbarPanel(panel) {
  const workspace = document.querySelector(".workspace");
  const mobile = window.matchMedia("(max-width: 920px)").matches;
  if (!workspace) return;

  workspace.classList.remove("mobile-panel-connections", "mobile-panel-chat", "mobile-panel-history");

  if (panel === "connections") {
    if (mobile) {
      leftCollapsed = false;
      document.getElementById("sidebarLeft")?.classList.remove("collapsed");
      workspace.classList.add("mobile-panel-connections");
    } else {
      if (leftCollapsed) toggleLeftSidebar();
    }
  } else if (panel === "chat" || panel === "history") {
    setSessionTab(panel);
    if (mobile) {
      rightCollapsed = false;
      document.getElementById("sidebarRight")?.classList.remove("collapsed");
      workspace.classList.add(`mobile-panel-${panel}`);
    } else {
      if (rightCollapsed) toggleRightSidebar();
    }
  }

  applyWorkspaceColumns();
  updateSidebarToggleIcons();
  persistUiPrefs();
}

document.querySelectorAll("[data-panel-action]").forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    showToolbarPanel(menuItem.dataset.panelAction);
    toolbarMore.classList.remove("open");
    toolbarMoreBtn.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (e) => {
  if (!toolbarMore.contains(e.target)) {
    toolbarMore.classList.remove("open");
    toolbarMoreBtn.setAttribute("aria-expanded", "false");
  }
});

// Responsive results toolbar menu. The real result buttons stay in the DOM so
// their existing handlers/state continue to work; mobile menu items trigger them.
const resultsMore = document.getElementById("resultsMore");
const resultsMoreBtn = document.getElementById("resultsMoreBtn");

resultsMoreBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = resultsMore.classList.toggle("open");
  resultsMoreBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

document.querySelectorAll("[data-results-action]").forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    const target = document.getElementById(menuItem.dataset.resultsAction);
    if (target && !target.disabled) target.click();
    resultsMore.classList.remove("open");
    resultsMoreBtn.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (e) => {
  if (!resultsMore.contains(e.target)) {
    resultsMore.classList.remove("open");
    resultsMoreBtn.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    resultsMore.classList.remove("open");
    resultsMoreBtn.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    toolbarMore.classList.remove("open");
    toolbarMoreBtn.setAttribute("aria-expanded", "false");
    document
      .querySelector(".workspace")
      ?.classList.remove("mobile-panel-connections", "mobile-panel-chat", "mobile-panel-history");
  }
});

function setStatus(kind, text) {
  const pill = document.getElementById("statusPill");
  pill.className = "status-pill" + (kind === "success" ? " success" : kind === "error" ? " error" : "");
  document.getElementById("statusText").textContent = text;
}

/* =========================================================================
   RESULTS RENDERING
   ========================================================================= */
function renderResults(tab) {
  const body = document.getElementById("resultsBody");
  const copyBtn = document.getElementById("copyResultBtn");
  const exportCsvBtn = document.getElementById("exportCsv");
  const exportJsonBtn = document.getElementById("exportJson");

  document.getElementById("viewTableBtn").classList.toggle("is-active", tab.view === "table");
  document.getElementById("viewJsonBtn").classList.toggle("is-active", tab.view === "json");
  document.getElementById("copyResultLabel").textContent = tab.view === "json" ? "Copy JSON" : "Copy CSV";
  const resultMenuCopyLabel = document.querySelector("[data-results-copy-label]");
  if (resultMenuCopyLabel) resultMenuCopyLabel.textContent = tab.view === "json" ? "Copy JSON" : "Copy CSV";

  if (!tab.result) {
    setStatus("idle", "Not run yet");
    copyBtn.disabled = true;
    exportCsvBtn.disabled = true;
    exportJsonBtn.disabled = true;
    body.innerHTML = `<div class="empty-state">
${icon("inbox", 30)}
<div class="title">No results yet</div>
<div class="sub">Write a query and press Run, or pick a table on the left to preview it.</div>
</div>`;
    return;
  }

  if (tab.result.status === "error") {
    setStatus("error", "Query failed");
    copyBtn.disabled = true;
    exportCsvBtn.disabled = true;
    exportJsonBtn.disabled = true;
    body.innerHTML = `<div class="error-block"><div class="err-title">Query not executed</div>${escapeHtml(tab.result.message)}</div>`;
    return;
  }

  const truncNote = tab.result.truncated ? ` (truncated to ${tab.result.rows.length})` : "";
  setStatus("success", `${tab.result.rowCount} rows${truncNote} · ${tab.result.ms} ms`);
  copyBtn.disabled = false;
  exportCsvBtn.disabled = false;
  exportJsonBtn.disabled = false;

  if (tab.view === "table") {
    body.innerHTML = renderTableHtml(tab.result.columns, tab.result.rows);
  } else {
    body.innerHTML = renderJsonHtml(tab.result.columns, tab.result.rows);
  }
}

function renderTableHtml(columns, rows) {
  if (rows.length === 0) {
    return `<div class="empty-state">${icon("inbox", 28)}<div class="title">Query ran, no rows returned</div></div>`;
  }
  let html = '<div class="table-wrap"><table class="result-table"><thead><tr>';
  columns.forEach((c) => (html += `<th>${escapeHtml(c)}</th>`));
  html += "</tr></thead><tbody>";
  rows.forEach((r) => {
    html += "<tr>";
    r.forEach((v) => {
      if (v === null || v === undefined) {
        html += `<td class="cell-null">NULL</td>`;
      } else if (typeof v === "number") {
        html += `<td class="cell-num">${v}</td>`;
      } else {
        html += `<td>${escapeHtml(String(v))}</td>`;
      }
    });
    html += "</tr>";
  });
  html += "</tbody></table></div>";
  return html;
}

function rowsToObjects(columns, rows) {
  return rows.map((r) => {
    const o = {};
    columns.forEach((c, i) => (o[c] = r[i]));
    return o;
  });
}

function buildCsv(columns, rows) {
  const esc = (v) =>
    v === null || v === undefined ? "" : /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v);
  return [columns.join(",")].concat(rows.map((r) => r.map(esc).join(","))).join("\n");
}

function renderJsonHtml(columns, rows) {
  const objs = rowsToObjects(columns, rows);
  const json = JSON.stringify(objs, null, 2);
  let colored = escapeHtml(json);
  colored = colored.replace(/"([^"]+)":/g, '<span class="jk">"$1"</span>:');
  colored = colored.replace(/: "([^"]*)"/g, ': <span class="jv-str">"$1"</span>');
  colored = colored.replace(/: (-?\d+(\.\d+)?)/g, ': <span class="jv-num">$1</span>');
  colored = colored.replace(/: null/g, ': <span class="jv-null">null</span>');
  return `<pre class="json-view">${colored}</pre>`;
}

document.getElementById("viewTableBtn").addEventListener("click", () => {
  const tab = getActiveTab();
  if (!tab) return;
  tab.view = "table";
  renderResults(tab);
  persistSession();
});
document.getElementById("viewJsonBtn").addEventListener("click", () => {
  const tab = getActiveTab();
  if (!tab) return;
  tab.view = "json";
  renderResults(tab);
  persistSession();
});

function downloadBlob(content, filename, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
}

document.getElementById("copyResultBtn").addEventListener("click", async () => {
  const tab = getActiveTab();
  if (!tab || !tab.result || tab.result.status !== "success") return;
  const { columns, rows } = tab.result;
  const text = tab.view === "json" ? JSON.stringify(rowsToObjects(columns, rows), null, 2) : buildCsv(columns, rows);
  const label = document.getElementById("copyResultLabel");
  try {
    await copyTextToClipboard(text);
    flashLabel(label, "Copied!", 1100);
  } catch (err) {
    flashLabel(label, "Copy failed", 1100);
  }
});

document.getElementById("exportCsv").addEventListener("click", () => {
  const tab = getActiveTab();
  if (!tab || !tab.result || tab.result.status !== "success") return;
  downloadBlob(buildCsv(tab.result.columns, tab.result.rows), `${tab.title}.csv`, "text/csv");
});
document.getElementById("exportJson").addEventListener("click", () => {
  const tab = getActiveTab();
  if (!tab || !tab.result || tab.result.status !== "success") return;
  const objs = rowsToObjects(tab.result.columns, tab.result.rows);
  downloadBlob(JSON.stringify(objs, null, 2), `${tab.title}.json`, "application/json");
});

/* =========================================================================
   SESSION HISTORY (server-backed)
   ========================================================================= */
async function loadHistory() {
  try {
    history = await api("/history?limit=200");
  } catch (err) {
    history = [];
  }
  renderHistory();
}

function renderHistory() {
  const list = document.getElementById("historyList");
  document.getElementById("historyCount").textContent = `${history.length} run${history.length === 1 ? "" : "s"}`;
  if (history.length === 0) {
    list.innerHTML = `<div class="tree-empty" style="padding:16px 8px;">Runs you execute will show up here so you can jump back to them.</div>`;
    return;
  }
  list.innerHTML = "";
  const label = document.createElement("div");
  label.className = "history-day";
  label.textContent = "RECENT";
  list.appendChild(label);
  history.forEach((h) => {
    const el = document.createElement("div");
    el.className = "history-item";
    const timeStr = new Date(h.createdAt.replace(" ", "T") + "Z").toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    el.innerHTML = `
<div class="history-row1">
<span class="sw ${h.status}"></span>
<span class="history-conn">${escapeHtml(h.connectionName || "deleted connection")}</span>
<span class="history-time">${timeStr}</span>
<span class="history-item-remove" data-role="remove" title="Delete this entry">${icon("x", 10)}</span>
</div>
<div class="history-query">${escapeHtml((h.query || "").replace(/\s+/g, " ").trim())}</div>
<div class="history-meta">${h.status === "success" ? `${h.rowCount ?? 0} rows · ${h.ms ?? 0} ms` : `<span class="error-text">${escapeHtml(h.errorMessage || "failed")}</span>`}</div>`;
    el.addEventListener("click", (e) => {
      if (e.target.closest('[data-role="remove"]')) {
        e.stopPropagation();
        deleteHistoryEntry(h.id);
        return;
      }
      if (!h.connectionId || !findConn(h.connectionId)) {
        alert("The connection used for this run no longer exists.");
        return;
      }
      const tab = makeFilledTab(h.connectionId, h.databaseName, h.query, null);
      openNewTab(tab);
    });
    list.appendChild(el);
  });
}

async function deleteHistoryEntry(id) {
  try {
    await api(`/history/${id}`, { method: "DELETE" });
    history = history.filter((h) => h.id !== id);
    renderHistory();
  } catch (err) {
    alert("Could not delete that entry: " + err.message);
  }
}

document.getElementById("clearAllHistory").addEventListener("click", async () => {
  if (history.length === 0) return;
  if (!confirm("Delete all session history? This cannot be undone.")) return;
  try {
    await api("/history", { method: "DELETE" });
    history = [];
    renderHistory();
  } catch (err) {
    alert("Could not clear history: " + err.message);
  }
});

/* =========================================================================
   NEW CONNECTION MODAL
   ========================================================================= */
let modalSelectedType = "mysql";
const overlay = document.getElementById("modalOverlay");
function showModalMessage(text, kind) {
  const box = document.getElementById("modalMessage");
  box.style.display = "block";
  box.textContent = text;
  box.style.background = kind === "error" ? "var(--error-soft)" : "var(--success-soft)";
  box.style.color = kind === "error" ? "var(--error)" : "var(--success)";
  box.style.border = "1px solid " + (kind === "error" ? "rgba(220,38,38,0.3)" : "rgba(23,163,74,0.3)");
}
function clearModalMessage() {
  const box = document.getElementById("modalMessage");
  box.style.display = "none";
  box.textContent = "";
}
function openModal() {
  clearModalMessage();
  overlay.classList.add("open");
}
function closeModalFn() {
  overlay.classList.remove("open");
}
document.getElementById("openConnModal2").addEventListener("click", openModal);
document.getElementById("closeModal").addEventListener("click", closeModalFn);
document.getElementById("cancelModal").addEventListener("click", closeModalFn);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModalFn();
});

document.querySelectorAll(".type-option").forEach((opt) => {
  opt.addEventListener("click", () => {
    document.querySelectorAll(".type-option").forEach((o) => o.classList.remove("selected"));
    opt.classList.add("selected");
    modalSelectedType = opt.dataset.type;
    document.getElementById("newConnPort").placeholder = modalSelectedType === "mysql" ? "3306" : "5432";
  });
});

function readModalForm() {
  return {
    name: document.getElementById("newConnName").value.trim(),
    type: modalSelectedType,
    host: document.getElementById("newConnHost").value.trim(),
    port: Number(document.getElementById("newConnPort").value.trim() || (modalSelectedType === "mysql" ? 3306 : 5432)),
    username: document.getElementById("newConnUser").value.trim(),
    password: document.getElementById("newConnPass").value,
    defaultDatabase: document.getElementById("newConnDb").value.trim() || null,
  };
}

document.getElementById("testConn").addEventListener("click", async () => {
  const btn = document.getElementById("testConn");
  const body = readModalForm();
  if (!body.name || !body.host) {
    showModalMessage("Fill in at least a name and host before testing.", "error");
    return;
  }
  btn.disabled = true;
  const originalHtml = btn.innerHTML;
  btn.textContent = "Testing…";
  try {
    await api("/connections/test", { method: "POST", body: JSON.stringify(body) });
    showModalMessage("Connected successfully.", "success");
  } catch (err) {
    showModalMessage(err.message, "error");
  }
  btn.disabled = false;
  btn.innerHTML = originalHtml;
});

document.getElementById("saveConn").addEventListener("click", async () => {
  const body = readModalForm();
  if (!body.name || !body.host) {
    showModalMessage("Name and host are required.", "error");
    return;
  }
  const btn = document.getElementById("saveConn");
  btn.disabled = true;
  try {
    const created = await api("/connections", { method: "POST", body: JSON.stringify(body) });
    connections.push({
      id: created.id,
      name: created.name,
      type: created.type,
      host: `${created.host}:${created.port}`,
      databases: null,
    });
    renderTree();
    renderConnectionSelect();
    closeModalFn();
    ["newConnName", "newConnHost", "newConnPort", "newConnUser", "newConnPass", "newConnDb"].forEach(
      (id) => (document.getElementById(id).value = ""),
    );
  } catch (err) {
    showModalMessage(err.message, "error");
  }
  btn.disabled = false;
});

/* =========================================================================
   CHAT MODEL PICKER — Cursor-style Cloud/Local selector. UI only for now:
   the choice is remembered (localStorage) and reflected in the assistant's
   placeholder reply, but no model is actually wired up or loaded yet.
   Local models are intended to run via node-llama-cpp once that's built.
   ========================================================================= */
const CHAT_MODEL_KEY = "querybench.chatmodel.v1";

function updateChatModelUi(value) {
  const isLocal = value === "local";
  document.getElementById("chatModelIcon").innerHTML = icon(isLocal ? "cpu" : "cloud", 12);
  document.getElementById("chatModelHint").textContent = isLocal
    ? "Runs locally (node-llama-cpp) — not wired up yet"
    : "Cloud API — preview only, not connected";
}

function getSelectedChatModelLabel() {
  const select = document.getElementById("chatModelSelect");
  return select.options[select.selectedIndex] ? select.options[select.selectedIndex].text : select.value;
}

function initChatModelPicker() {
  const select = document.getElementById("chatModelSelect");
  let saved = "claude-sonnet";
  try {
    saved = localStorage.getItem(CHAT_MODEL_KEY) || "claude-sonnet";
  } catch (e) {
    /* ignore */
  }
  if ([...select.options].some((o) => o.value === saved)) select.value = saved;
  updateChatModelUi(select.value);
  select.addEventListener("change", (e) => {
    try {
      localStorage.setItem(CHAT_MODEL_KEY, e.target.value);
    } catch (err) {
      /* ignore */
    }
    updateChatModelUi(e.target.value);
  });
}

/* =========================================================================
   SIDEBAR COLLAPSE (left: connections, right: session chat / history)
   ========================================================================= */
let leftCollapsed = false;
let rightCollapsed = false;

function applyWorkspaceColumns() {
  const leftW = leftCollapsed ? "44px" : "250px";
  const rightW = rightCollapsed ? "44px" : "300px";
  document.querySelector(".workspace").style.gridTemplateColumns = `${leftW} 1fr ${rightW}`;
}

function updateSidebarToggleIcons() {
  document.getElementById("toggleLeftSidebar").innerHTML = icon(leftCollapsed ? "chevronRight" : "chevronLeft", 13);
  document.getElementById("toggleRightSidebar").innerHTML = icon(rightCollapsed ? "chevronLeft" : "chevronRight", 13);
  document.getElementById("toggleLeftSidebar").title = leftCollapsed ? "Expand connections" : "Collapse connections";
  document.getElementById("toggleRightSidebar").title = rightCollapsed
    ? "Expand session panel"
    : "Collapse session panel";
}

function setSessionTab(tab) {
  sessionTab = tab === "history" ? "history" : "chat";
  document.getElementById("sidebarRight").dataset.sessionTab = sessionTab;
  document.querySelectorAll("#sessionTabs .session-tab").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.sessionTab === sessionTab);
  });
  document.querySelectorAll("#sessionRail .rail-item").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.sessionTab === sessionTab);
  });
}

function expandToSessionTab(tab) {
  setSessionTab(tab);
  if (!rightCollapsed) {
    persistUiPrefs();
    return;
  }
  rightCollapsed = false;
  document.getElementById("sidebarRight").classList.remove("collapsed");
  applyWorkspaceColumns();
  updateSidebarToggleIcons();
  persistUiPrefs();
}

function toggleLeftSidebar() {
  const mobile = window.matchMedia("(max-width: 920px)").matches;

  if (mobile) {
    // On tablet/mobile the sidebar is an overlay. The collapse button
    // should close the overlay completely, not leave a collapsed rail.
    leftCollapsed = true;
    document.getElementById("sidebarLeft").classList.add("collapsed");
    document.querySelector(".workspace")?.classList.remove("mobile-panel-connections");
    applyWorkspaceColumns();
    updateSidebarToggleIcons();
    persistUiPrefs();
    return;
  }

  leftCollapsed = !leftCollapsed;
  document.getElementById("sidebarLeft").classList.toggle("collapsed", leftCollapsed);
  applyWorkspaceColumns();
  updateSidebarToggleIcons();
  if (leftCollapsed) renderConnectionsRail();
  persistUiPrefs();
}

function toggleRightSidebar() {
  const mobile = window.matchMedia("(max-width: 920px)").matches;

  if (mobile) {
    // On tablet/mobile the sidebar is an overlay. The collapse button
    // should close the overlay completely.
    rightCollapsed = true;
    document.getElementById("sidebarRight").classList.add("collapsed");
    document.querySelector(".workspace")?.classList.remove("mobile-panel-chat", "mobile-panel-history");
    applyWorkspaceColumns();
    updateSidebarToggleIcons();
    persistUiPrefs();
    return;
  }

  rightCollapsed = !rightCollapsed;
  document.getElementById("sidebarRight").classList.toggle("collapsed", rightCollapsed);
  applyWorkspaceColumns();
  updateSidebarToggleIcons();
  persistUiPrefs();
}

document.getElementById("toggleLeftSidebar").addEventListener("click", toggleLeftSidebar);
document.getElementById("toggleRightSidebar").addEventListener("click", toggleRightSidebar);

document.getElementById("sessionTabs").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-session-tab]");
  if (!btn) return;
  setSessionTab(btn.dataset.sessionTab);
  persistUiPrefs();
});

document.getElementById("sessionRail").addEventListener("click", (e) => {
  const item = e.target.closest("[data-session-tab]");
  if (!item) return;
  expandToSessionTab(item.dataset.sessionTab);
});

function appendChatMessage(role, text) {
  const list = document.getElementById("chatMessages");
  const empty = list.querySelector(".chat-empty");
  if (empty) empty.remove();
  const el = document.createElement("div");
  el.className = "chat-bubble chat-bubble-" + role;
  el.textContent = text;
  list.appendChild(el);
  list.scrollTop = list.scrollHeight;
}

document.getElementById("chatComposer").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text) return;
  input.value = "";
  appendChatMessage("user", text);
  appendChatMessage(
    "assistant",
    `The AI agent isn't connected yet (model selected: ${getSelectedChatModelLabel()}). This panel is a preview — chat will work here once a backend is wired up.`,
  );
});

document.getElementById("chatInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    document.getElementById("chatComposer").requestSubmit();
  }
});

// Vertical rail shown when the connections sidebar is collapsed — one label
// per connection (max 5), click any of them to expand back.
function renderConnectionsRail() {
  const rail = document.getElementById("connectionsRail");
  rail.innerHTML = "";
  const shown = connections.slice(0, 5);
  shown.forEach((conn) => {
    const item = document.createElement("div");
    item.className = "rail-item";
    item.textContent = conn.name;
    item.title = `${conn.name} (${conn.type}) — click to expand`;
    item.addEventListener("click", toggleLeftSidebar);
    rail.appendChild(item);
  });
  if (connections.length > 5) {
    const more = document.createElement("div");
    more.className = "rail-item rail-more";
    more.textContent = `+${connections.length - 5} more`;
    more.title = "More connections — click to expand";
    more.addEventListener("click", toggleLeftSidebar);
    rail.appendChild(more);
  }
}

/* =========================================================================
   RESIZABLE RESULTS PANEL — drag the handle between the editor and the
   results area to make the results panel taller or shorter.
   ========================================================================= */
const editorShellEl = document.getElementById("editorShell");
const resizeHandleEl = document.getElementById("resizeHandle");
let resizeDragging = false;
let resizeStartY = 0;
let resizeStartHeight = 0;
let resizeMin = 100;
let resizeMax = 600;

resizeHandleEl.addEventListener("mousedown", (e) => {
  resizeDragging = true;
  resizeStartY = e.clientY;
  resizeStartHeight = editorShellEl.getBoundingClientRect().height;

  const mainRect = document.querySelector(".main").getBoundingClientRect();
  const tabbarH = document.getElementById("tabbar").getBoundingClientRect().height;
  const toolbarH = document.querySelector(".toolbar").getBoundingClientRect().height;
  const handleH = resizeHandleEl.getBoundingClientRect().height;
  const resultsToolbarH = document.querySelector(".results-toolbar").getBoundingClientRect().height;
  resizeMin = 100;
  resizeMax = Math.max(resizeMin, mainRect.height - tabbarH - toolbarH - handleH - resultsToolbarH - 80);

  resizeHandleEl.classList.add("active");
  document.body.style.cursor = "row-resize";
  document.body.style.userSelect = "none";
  e.preventDefault();
});

window.addEventListener("mousemove", (e) => {
  if (!resizeDragging) return;
  const delta = e.clientY - resizeStartY;
  const newHeight = Math.max(resizeMin, Math.min(resizeStartHeight + delta, resizeMax));
  editorShellEl.style.height = newHeight + "px";
  hideAutocomplete();
});

window.addEventListener("mouseup", () => {
  if (!resizeDragging) return;
  resizeDragging = false;
  resizeHandleEl.classList.remove("active");
  document.body.style.cursor = "";
  document.body.style.userSelect = "";
  persistUiPrefs();
});

/* =========================================================================
   THEME (light / dark / system)
   ========================================================================= */
const THEME_KEY = "querybench.theme.v1";
const themeMedia = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

function resolvedTheme(pref) {
  if (pref === "dark") return "dark";
  if (pref === "light") return "light";
  return themeMedia && themeMedia.matches ? "dark" : "light";
}

function applyTheme(pref) {
  document.documentElement.setAttribute("data-theme", resolvedTheme(pref));
  const iconName = pref === "dark" ? "moon" : pref === "light" ? "sun" : "monitor";
  const iconEl = document.getElementById("themeIcon");
  if (iconEl) iconEl.innerHTML = icon(iconName, 13);
}

function setTheme(pref) {
  try {
    localStorage.setItem(THEME_KEY, pref);
  } catch (e) {
    /* ignore */
  }
  applyTheme(pref);
}

function initTheme() {
  let pref = "system";
  try {
    pref = localStorage.getItem(THEME_KEY) || "system";
  } catch (e) {
    /* ignore */
  }
  document.getElementById("themeSelect").value = pref;
  applyTheme(pref);
  document.getElementById("themeSelect").addEventListener("change", (e) => setTheme(e.target.value));
  if (themeMedia) {
    themeMedia.addEventListener("change", () => {
      const current = document.getElementById("themeSelect").value;
      if (current === "system") applyTheme("system");
    });
  }
}

/* =========================================================================
   UI PREFERENCES (localStorage) — sidebar collapsed state + editor height
   ========================================================================= */
const UI_PREFS_KEY = "querybench.uiprefs.v1";

function persistUiPrefs() {
  try {
    localStorage.setItem(
      UI_PREFS_KEY,
      JSON.stringify({
        leftCollapsed,
        rightCollapsed,
        sessionTab,
        editorHeightPx: editorShellEl.style.height || null,
      }),
    );
  } catch (e) {
    /* ignore */
  }
}

function restoreUiPrefs() {
  let raw;
  try {
    raw = localStorage.getItem(UI_PREFS_KEY);
  } catch (e) {
    return;
  }
  if (!raw) return;
  try {
    const prefs = JSON.parse(raw);
    if (prefs.leftCollapsed) {
      leftCollapsed = true;
      document.getElementById("sidebarLeft").classList.add("collapsed");
    }
    if (prefs.rightCollapsed) {
      rightCollapsed = true;
      document.getElementById("sidebarRight").classList.add("collapsed");
    }
    if (prefs.sessionTab === "chat" || prefs.sessionTab === "history") {
      setSessionTab(prefs.sessionTab);
    }
    applyWorkspaceColumns();
    updateSidebarToggleIcons();
    if (prefs.editorHeightPx) {
      editorShellEl.style.height = prefs.editorHeightPx;
    }
  } catch (e) {
    /* ignore malformed prefs */
  }
}

/* =========================================================================
   INIT
   ========================================================================= */
async function init() {
  try {
    const rows = await api("/connections");
    connections = rows.map((c) => ({
      id: c.id,
      name: c.name,
      type: c.type,
      host: `${c.host}:${c.port}`,
      databases: null,
    }));
  } catch (err) {
    connections = [];
  }

  const restored = restoreSession();
  if (!restored) {
    tabs = [];
    activeTabId = null;
  }

  renderTree();
  renderConnectionSelect();
  renderTabs();
  refreshWorkbench();
  updateSidebarToggleIcons();
  initChatModelPicker();
  restoreUiPrefs();
  await loadHistory();

  if (connections.length === 0) {
    openModal();
  }
}
initTheme();
init();
