// vue template
<script>
export default {
  name: 'flutterSwipePage',
  data: function () {
    return {
      autoplay: true,
      index: 0,
    }
  },
  methods: {
    onChange: function (e) {
      console.log('onchange')
      this.index = e.detail.index;
    },
    onClick: function (e) {
      console.log('onClick')
      this.index = e.detail.index;
    }
  }
}
// Parameter	Default	Description
// scrollDirection	Axis.horizontal	If Axis.horizontal, the scroll view's children are arranged horizontally in a row instead of vertically in a column.
// loop	true	Set to false to disable continuous loop mode.
// index	0	Index number of initial slide.
// autoplay	false	Set to true enable auto play mode.
// onChange	void onChange(int index)	Called with the new index when the user swiped or autoplay
// onClick	void onClick(int index)	Called when user tap ui.
// duration	300.0	The milliscends of every transaction animation costs


// Dart Code
// import 'package:flutter/material.dart';
// import 'package:webf/webf.dart';
// import 'package:card_swiper/card_swiper.dart';
//
// class FlutterSwiperElement extends WidgetElement {
//   FlutterSwiperElement(BindingContext? context) : super(context);
//   AxisDirection _axisDirection = AxisDirection.left;
//
//   set axisDirection(value) {
//     _axisDirection = value == 'left' ? AxisDirection.left : AxisDirection.right;
//   }
//
//   AxisDirection get axisDirection => _axisDirection;
//   Axis _scrollDirection = Axis.horizontal;
//
//   set scrollDirection(value) {
//     _scrollDirection = value == 'vertical' ? Axis.vertical : Axis.horizontal;
//   }
//
//   Axis get scrollDirection => _scrollDirection;
//
//   bool _autoplay = false;
//
//   get autoplay => _autoplay;
//
//   set autoplay(value) {
//     if (value is String) {
//       _autoplay = value == 'true';
//       return;
//     }
//     _autoplay = value == true;
//   }
//
//   bool _loop = true;
//
//   bool get loop => _loop;
//
//   set loop(value) {
//     if (value is String) {
//       _loop = value == 'true';
//       return;
//     }
//     _loop = value == true;
//   }
//
//   int _index = 0;
//
//   int get index => _index;
//
//   set index(value) {
//     if (value is String) {
//       _index = int.tryParse(value) ?? 0;
//       return;
//     }
//     _index = value;
//   }
//
//   int _duration = 300;
//
//   int get duration => _duration;
//
//   set duration(value) {
//     if (value is String) {
//       _duration = int.tryParse(value) ?? 300;
//       return;
//     }
//     _duration = value;
//   }
//
//   @override
//   void initializeProperties(Map<String, BindingObjectProperty> properties) {
//     super.initializeProperties(properties);
//   }
//
//   @override
//   void initializeAttributes(Map<String, ElementAttributeProperty> attributes) {
//     super.initializeAttributes(attributes);
//     attributes['autoplay'] = ElementAttributeProperty(
//         getter: () {
//           return autoplay.toString();
//         },
//         setter: (value) => autoplay = value);
//     attributes['scrollDirection'] =
//         ElementAttributeProperty(getter: () => scrollDirection.toString(), setter: (value) => scrollDirection = value);
//     attributes['axisDirection'] =
//         ElementAttributeProperty(getter: () => axisDirection.toString(), setter: (value) => axisDirection = value);
//     attributes['loop'] = ElementAttributeProperty(getter: () => loop.toString(), setter: (value) => loop = value);
//     attributes['index'] = ElementAttributeProperty(getter: () => index.toString(), setter: (value) => index = value);
//     attributes['duration'] =
//         ElementAttributeProperty(getter: () => duration.toString(), setter: (value) => duration = value);
//   }
//
//   @override
//   Widget build(BuildContext context, List<Widget> children) {
//     return SizedBox(
//       width: 300,
//       height: 300,
//       child: Swiper(
//           itemBuilder: (BuildContext context, int index) {
//             return children[index];
//           },
//           index: index,
//           autoplay: autoplay,
//           duration: duration,
//           loop: loop,
//           scrollDirection: scrollDirection,
//           axisDirection: axisDirection,
//           itemCount: children.length,
//           pagination: SwiperPagination(),
//           onIndexChanged: (index) {
//             dispatchEvent(CustomEvent('change', detail: {'index': index}));
//           },
//           onTap: (index) {
//             dispatchEvent(CustomEvent('tap', detail: {'index': index}));
//           }
//           // control: SwiperControl(),
//           ),
//     );
//   }
// }

</script>
<template>
  <div>
<!--  事件名称 必须是小写,非驼峰    -->
    <flutter-swiper
        @change="onChange"
        @tap="onClick"
    >
      <div class="swiper-item-1"/>
      <div class="swiper-item-2"/>
      <div class="swiper-item-3"/>
      <div class="swiper-item-4"/>
    </flutter-swiper>
  </div>
</template>
<style>
.swiper-item-1 {
  background-image: url("http://192.168.50.76:8081/1.svg.png");
  /*background-color: #4fc08d;*/
  background-size: cover;
  width: 100px;
  height: 100px;
}

.swiper-item-2 {
  background-image: url("http://192.168.50.76:8081/2.svg.png");
  /*background-color: #4fc08d;*/
  background-size: cover;
  width: 100px;
  height: 100px;
}

.swiper-item-3 {
  background-image: url("http://192.168.50.76:8081/3.svg.png");
  /*background-color: #4fc08d;*/
  background-size: cover;
  width: 100px;
  height: 100px;
}

.swiper-item-4 {
  background-image: url("http://192.168.50.76:8081/4.svg.png");
  /*background-color: #4fc08d;*/
  background-size: cover;
  width: 100px;
  height: 100px;
}
</style>

