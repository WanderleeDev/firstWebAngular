import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorTransparency'
})
export class ColorTransparencyPipe implements PipeTransform {

  transform(color: string, opacity: number): string {
    // Verificar que el color sea válido (por ejemplo, "#RRGGBB" o "rgba(r, g, b, a)")
   if (!color || typeof color !== 'string') {
     return color;
   }

   // Verificar que la opacidad sea un número válido entre 0 y 1
   opacity = Math.max(0, Math.min(1, opacity));
   // Si el color es en formato "#RRGGBB", convertirlo a "rgba(r, g, b, a)"
   if (color[0] === '#') {
     color = color.substring(1);
     if (color.length === 3) {
       color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
     }
     const red = parseInt(color.substring(0, 2), 16);
     const green = parseInt(color.substring(2, 4), 16);
     const blue = parseInt(color.substring(4, 6), 16);
     color = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
   } else if (color.startsWith('rgb')) {
     // Si el color ya es en formato "rgba(r, g, b, a)", actualizar el canal alfa
     color = color.replace(/[\d.]+\)$/g, opacity.toString() + ')');
   }

   return color;
 }

}
