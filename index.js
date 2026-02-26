    /* -------------------------------
   Установка Material = 14K White Gold
---------------------------------- */
const materialSelect = scope.querySelector('select[name="options[Material]"]');

if (materialSelect) {

  // Если уже выбран 14K — ничего не делаем
  if (materialSelect.value !== "14K White Gold") {

    materialSelect.value = "14K White Gold";

    // Сообщаем Shopify об изменении
    materialSelect.dispatchEvent(new Event('change', { bubbles: true }));

    // Обновляем текст рядом с Material
    const materialIndex = materialSelect.dataset.index?.replace('option','');
    const materialLabel = scope.querySelector(
      `[data-selected-value-for-option][data-option-name="option${materialIndex}"]`
    );

    if (materialLabel) {
      materialLabel.textContent = "14K White Gold";
    }
  }
}


document.addEventListener("DOMContentLoaded", function () {

  const materialSelect = document.querySelector('#option1');
  if (!materialSelect) return;

  materialSelect.value = "14K White Gold";
  materialSelect.dispatchEvent(new Event('change', { bubbles: true }));

  // Обновляем текст рядом с Material
  const labelSpan = document.querySelector('[data-option-name="option1"]');
  if (labelSpan) {
    labelSpan.textContent = "14K White Gold";
  }

});


window.addEventListener("load", function () {

const materialSelect = document.querySelector('select[name="options[Material]"]'); if (!materialSelect) return; if (materialSelect.value !== "14K White Gold") { materialSelect.value = "14K White Gold"; materialSelect.dispatchEvent(new Event('change', { bubbles: true })); }
});