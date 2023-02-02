<template>
  <div>
    <van-nav-bar title="Vant" left-text="Back" />
    <van-cell-group>
      <van-cell
        v-for="page in pages"
        :key="page.name"
        :title="page.name"
        :value="page.path"
        :to="page.path"
        is-link
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        { name: "Button", path: "button" },
        { name: "Image", path: "image" },
        { name: "Icon", path: "icon" },
        { name: "Cell", path: "cell" },
        { name: "CellGroup", path: "cellGroup" },
        { name: "Checkbox", path: "checkbox" },
        { name: "CheckboxGroup", path: "checkboxGroup" },
        { name: "Col", path: "col" },
        { name: "Row", path: "row" },
        { name: "Space", path: "space" },
        { name: "CountDown", path: "countDown" },
        { name: "Radio", path: "radio" },
        { name: "RadioGroup", path: "RadioGroup" },
        { name: "Layout", path: "layout" },
        { name: "Tag", path: "tag" },
        { name: "Collapse", path: "collapse" },
        { name: "CollapseItem", path: "collapseItem" },
        { name: "Card", path: "card" },
        { name: "Badge", path: "badge" },
        { name: "Loading", path: "loading" },
        { name: "Field", path: "filed" },
        { name: "Form", path: "form" },
        { name: "Stepper", path: "stepper" },
        { name: "Switch", path: "switch" },
        { name: "Notify", path: "notify" },
        { name: "NumberKeyboard", path: "numberKeyboard" },
        { name: "Picker", path: "picker" },
        { name: "Tab", path: "tab" },
        { name: "Overlay", path: "overlay" },
        { name: "Popup", path: "popup" },
        { name: "Popover", path: "popover" },
        { name: "Toast", path: "toast" },
        { name: "Picker", path: "picker" },
        { name: "Calendar", path: "" },
        { name: "DatetimePicker", path: "datetimePicker" },
        { name: "Dialog", path: "dialog" },
        { name: "Swipe", path: "swipe" },
        { name: "Transition", path: "transition" },
        { name: "SwipeItem", path: "SwipeItem" },
      ],
    };
  },
};
</script>

<style></style>
