## ¿Qué ventajas tiene usar React frente a trabajar solo con JavaScript puro para interfaces web?

El poder ahorrar redundancia a la hora de tener que entrar en tanta especificidad, tener la capacidad de crear componentes abstractos que permiten crear UIs simples o complejas pero manejables a nivel de código, y poder entrar en un paradigma enfocado en declaración antes de programación directa/manual con el DOM en js. 

## ¿Qué beneficios ofrece Next.js al trabajar sobre React?

Simplificar el setup de cualquier app que querramos crear, poder utilizar y acceder con facilidad a herramientas de la comunidad, y ahorro de trabajo o pasos extras al usar el ecosistema de react en nuestro curso.

## ¿Qué significa que Next.js tenga un App Router y por qué se recomienda usarlo?

Es la manera en que el software (Next.js) reconoce partes primordiales para el funcionamiento de la app web, como routing, assets estáticos dentro de "public", definir una jerarquía y orden dentro de la estructura que se define con app router que da una amplia funcionalidad, etc. Se recomienda usarlo por ser el estandar que establecieron desde ya varias versiones atrás, y por el enfoque de desarrollo que la comunidad ha dado para que las herramientas actuales soporten esta estructura.

## ¿Qué diferencia hay entre client components y server components en Next.js? 

Los componentes del lado del cliente son los que se actualizan en la computadora del lado del usuario que está utilizando la app web en ese instante, estos tienen sus scripts que reaccionan a eventos y realizan cambios de estado correspondientes a lo sucedido en vivo. 

Los componentes del lado del servidor no se muestran en el cliente, sino que son manipulados desde el servidor, cosa que no necesariamente tienen scripts adjuntos al componente de cliente o al menos no la lógica completa, para aliviar así la carga de tareas que no son necesarias desde el lado del usuario y se dejan al servidor. Normalmente son cosas estáticas y que queremos que sean rápidas, lo contrario a la parte de usuario que suelen ser componentes que requieren animaciones, procesos visuales, etc. 

## ¿Por qué crees que en desarrollo profesional se usan repositorios públicos o privados en GitHub en lugar de solo trabajar en carpetas locales?

No es una sola persona la que normalmente lidera un proyecto en toda la vida y desarrollo de este, y esto conlleva a colaboraciones con otros desarrolladores o individuos de varios campos. Eventualmente van a ocurrir colisiones con cambios realizados, y estar compartiendo a todos los detalles añadidos o modificados dentro de un grupo de muchos involucrados es laborioso. Los repositorios con sistemas de gestión de versiones ofrecen entonces el manejo del código fuente y que el trabajo pueda ser llevado con control total sobre todos estos aspectos.

Con esto en mente, llevar un historial de cambios y múltiples derivadas del trabajo principal con las ramas que se pueden crear, para eventualmente integrarlas en la app base, brinda un entorno profesional y escalable en toda la vida del proyecto. Esto también añade la posibilidad de crear respaldos y poder restaurar estados anteriores o analizar cambios con mayor detenimiento y comparar alternativas que vayan agregando todos los devs que echen código en el asunto.