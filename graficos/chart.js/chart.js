const getRandomRGB = () => {
    const red = (Math.random() * 255).toFixed();
    const green = (Math.random() * 255).toFixed();
    const blue = (Math.random() * 255).toFixed();

    return `rgb(${red},${green},${blue})`;
};

//Creamos el objeto canvas para gráfica de barras
const ctx = document
    .getElementById("grafico-barras")
    //Definimos el contexto del canvas
    .getContext("2d");

//Creamos el objeto canvas para gráfica de pie
const ctx2 = document
    .getElementById("grafico-pie")
    //Definimos el contexto del canvas
    .getContext("2d");

//Llamamos al objeto Chart y enviamos el objeto canvas y un objeto con las opciones del chart.
const myChartBar = new Chart(ctx, {
    //Tipo de graficas
    type: "bar",
    //Datos que se van a mostrar en la gráfica.
    data: {
        //Array que contendrá las etiquetas de los segmentos en el eje horizontal
        labels: ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"],
        //Datos de la gráfica. Array que contendrá un grupo de datos que se mostrará en la gráfica por lo que si enviamos varios objetos tendremos muchas grupos de datos para mostrar en la gráfica.
        datasets: [
            //Objeto que contendrá los datos internos de la gráfica.
            {
                //Leyenda superior de la gráfica. También sirve como check para mostrar u ocultar los datos de este grupo.
                label: "Leyenda de la grafica",
                //Datos que se mostrarán para graficas. Se envia un array con los valores que van a tener los elementos definidos en la propiedad "labels" en el mismo orden.
                data: [
                    Math.random() * 10,
                    Math.random() * 10,
                    Math.random() * 10,
                    Math.random() * 10,
                    Math.random() * 10,
                    Math.random() * 10,
                    Math.random() * 10,
                ],
                //Estilos para cada columna de la gráfica. Array con el color de la gráfica que se imprimirá en pantalla.
                backgroundColor: [
                    getRandomRGB(),
                    getRandomRGB(),
                    getRandomRGB(),
                    getRandomRGB(),
                    getRandomRGB(),
                    getRandomRGB(),
                    getRandomRGB(),
                ],
            },
        ],
    },
    //Opciones globales de la gráfica. Objeto con las configuraciones de la gráfica.
    options: {
        //Se usa para definir la escala de los valores de nuestra gráfica.
        scales: {
            //Configuración de la escala vertical de la gráfica.
            yAxes: [
                {
                    //Son los saltos que van a dar los valores en el eje vertical.
                    ticks: {
                        beginAtZero: false,
                    },
                },
            ],
        },
    },
});

const myChartPie = new Chart(ctx2, {
    //Tipo de graficas
    type: "line",
    //Datos que se van a mostrar en la gráfica.
    data: {
        //Array que contendrá las etiquetas de los segmentos en el eje horizontal
        labels: ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"],
        //Datos de la gráfica. Array que contendrá un grupo de datos que se mostrará en la gráfica por lo que si enviamos varios objetos tendremos muchas grupos de datos para mostrar en la gráfica.
        datasets: [
            //Objeto que contendrá los datos internos de la gráfica.
            {
                //Leyenda superior de la gráfica. También sirve como check para mostrar u ocultar los datos de este grupo.
                label: "Leyenda de la grafica",
                //Datos que se mostrarán para graficas. Se envia un array con los valores que van a tener los elementos definidos en la propiedad "labels" en el mismo orden.
                data: [
                    Math.random() * 10,
                    Math.random() * 10,
                    Math.random() * 10,
                    Math.random() * 10,
                    Math.random() * 10,
                    Math.random() * 10,
                    Math.random() * 10,
                ],
                //Estilos para cada columna de la gráfica. Array con el color de la gráfica que se imprimirá en pantalla.
                backgroundColor: [
                    getRandomRGB(),
                    getRandomRGB(),
                    getRandomRGB(),
                    getRandomRGB(),
                    getRandomRGB(),
                    getRandomRGB(),
                    getRandomRGB(),
                ],
                hoverOffset: 50,
            },
        ],
    },
    options: {
        responsive: true,
        animations: {
            tension: {
                duration: 1500,
                easing: "linear",
                from: 1,
                to: .5,
                loop: false,
            },
        },
        plugins: {
            title: {
                display: true,
                text: "Custom Chart Title",
            },
        },
    },
});
