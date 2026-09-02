# swapmpro 💱

**app para gestionar cambios de divisas** - calcula ganancias, mantén registros y emite reportes.

## características

✅ **registrar cambios** de divisas con cálculo automático de ganancias
✅ **historial completo** de todas las operaciones
✅ **reportes visuales** con gráficos de ganancias
✅ **seguimiento de saldos** por moneda
✅ **funcionamiento offline** - trabaja sin internet
✅ **actualizaciones automáticas** - los cambios se cargan automáticamente
✅ **datos privados** - todo se guarda en tu dispositivo

---

## 🚀 instalación en github pages

### paso 1: crea un repositorio en github

1. ve a github.com y loguéate
2. click en **"+"** → **"new repository"**
3. nombre: `swapmpro-app` (o el que prefieras)
4. ✅ **marca "private"** (para que sea privado)
5. click en **"create repository"**

### paso 2: sube los archivos

**opción a: usando git (línea de comandos)**

```bash
# 1. clona tu repositorio
git clone https://github.com/tunombre/swapmpro-app.git
cd swapmpro-app

# 2. copia los archivos aquí:
# - index.html
# - manifest.json
# - sw.js
# - readme.md (este archivo)

# 3. sube los cambios
git add .
git commit -m "primer commit - swapmpro"
git push origin main
```

**opción b: usando la interfaz web (más fácil)**

1. en tu repositorio, click en **"add file"** → **"upload files"**
2. arrastra o selecciona estos archivos:
   - `index.html`
   - `manifest.json`
   - `sw.js`
3. click en **"commit changes"**

### paso 3: activa github pages

1. en tu repositorio, ve a **settings** → **pages**
2. en "build and deployment":
   - source: **deploy from a branch**
   - branch: **main** (o master)
   - folder: **/ (root)**
3. click en **save**

**espera 1-2 minutos** y listo. tu app estará en:
```
https://tunombre.github.io/swapmpro-app/
```

---

## 📱 acceso desde móvil

### iphone (ios)

1. abre safari
2. ve a: `https://tunombre.github.io/swapmpro-app/`
3. click en el botón **compartir** (↑)
4. selecciona **"agregar a pantalla de inicio"**
5. click en **"agregar"**

✅ la app aparecerá como icono en tu pantalla de inicio

### android

1. abre chrome (o firefox)
2. ve a: `https://tunombre.github.io/swapmpro-app/`
3. espera a que aparezca el banner **"instalar app"**
4. click en **"instalar"**

o manualmente:
1. menú ⋮ → **"instalar aplicación"**
2. click en **"instalar"**

✅ la app se instalará como app nativa

---

## 🔄 actualizaciones automáticas

cada vez que hagas cambios en github:

1. edita `index.html` (o cualquier archivo)
2. haz commit y push
3. espera **1-2 minutos** a que github pages actualice
4. en tu móvil: **cierra y abre la app nuevamente**

la app detectará automáticamente los cambios y se actualizará.

---

## 💾 datos

- **se guardan en tu dispositivo** (localstorage)
- **100% privados** - nadie más tiene acceso
- **exportar datos**: en la sección reportes → "descargar datos"
- **respaldar**: descarga el json regularmente

---

## 🛠️ para tu amigo (cambista)

simplemente comparte el link:
```
https://tunombre.github.io/swapmpro-app/
```

él puede:
- 📱 instalarla en su móvil como app
- 💰 registrar cambios mientras trabaja
- 📊 ver reportes en tiempo real
- 📥 exportar datos cuando lo necesite

---

## 🔒 privacidad

- ✅ repositorio privado en github (solo tú ves el código)
- ✅ app funciona sin conectarse a servidores
- ✅ los datos se guardan localmente en el dispositivo
- ✅ solo quienes tengan el link pueden acceder
- ⚠️ el código html es visible (es javascript de cliente)

---

## 📝 notas

- la app **se actualiza automáticamente** cada vez que cambias algo en github
- funciona **completamente offline**
- las cotizaciones se actualizan cada 60 segundos (requiere internet)
- todos los datos se guardan **en el dispositivo**, no en un servidor

---

**desarrollado con ❤️ para swapmpro**
