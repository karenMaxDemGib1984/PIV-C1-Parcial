class CalculadoraPrecio extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="container">
                <form id="adminForm">
                    <label for="producto">Nombre del Producto:</label>
                    <input type="text" id="producto" placeholder="Ej: Laptop Dell">
                    <span id="err-producto" class="error-msg"></span>

                    <label for="costo">Costo Base ($):</label>
                    <input type="number" id="costo" step="0.01" placeholder="0.00">
                    <span id="err-costo" class="error-msg"></span>

                    <label for="categoria">Categoría Fiscal:</label>
                    <select id="categoria">
                        <option value="">--Seleccione--</option>
                        <option value="0.13">General (13% IVA)</option>
                        <option value="0.05">Reducido (5%)</option>
                        <option value="0">Exento (0%)</option>
                    </select>
                    <span id="err-categoria" class="error-msg"></span>

                    <button type="submit" id="btnCalcular">Calcular Precio Final</button>
                </form>

                <div id="resultado">
                    <h3>Resumen de Operación</h3>
                    <p id="res-texto"></p>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        const form = this.querySelector('#adminForm');
        form.addEventListener('submit', (e) => this.procesarDatos(e));
    }

    procesarDatos(e) {
        e.preventDefault(); // Evita recargar la página
        
        // Limpiar errores previos
        this.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

        // Captura de datos
        const producto = this.querySelector('#producto').value.trim();
        const costo = parseFloat(this.querySelector('#costo').value);
        const impuesto = this.querySelector('#categoria').value;

        // Validación
        let esValido = true;

        if (!producto) {
            this.querySelector('#err-producto').textContent = 'El nombre es obligatorio.';
            esValido = false;
        }
        if (isNaN(costo) || costo <= 0) {
            this.querySelector('#err-costo').textContent = 'Ingrese un costo válido mayor a 0.';
            esValido = false;
        }
        if (impuesto === "") {
            this.querySelector('#err-categoria').textContent = 'Seleccione una categoría.';
            esValido = false;
        }

        if (esValido) {
            const total = costo + (costo * parseFloat(impuesto));
            this.mostrarResultado(producto, total);
        }
    }

    mostrarResultado(nombre, total) {
        const divRes = this.querySelector('#resultado');
        const texto = this.querySelector('#res-texto');
        
        divRes.style.display = 'block';
        texto.innerHTML = `El producto <strong>${nombre}</strong> tiene un precio de venta sugerido de: <strong>$${total.toFixed(2)}</strong> (IVA incluido).`;
    }
}

// Registro del Custom Element
customElements.define('calculadora-precio', CalculadoraPrecio);