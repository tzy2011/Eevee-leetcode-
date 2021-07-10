/**
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器。

 

示例 1：



输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
示例 2：

输入：height = [1,1]
输出：1
示例 3：

输入：height = [4,3,2,1,4]
输出：16
示例 4：

输入：height = [1,2,1]
输出：2

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/container-with-most-water
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 暴力窮舉法
var maxInAllArea = function (height) {
    var maxWaterArea = 0
    for (let i = 1; i < height.length; i++) {
        for (let j = height.length; j > 0; j--) {
            var nowArea = Math.abs(j - i) * Math.min(height[i - 1], height[j - 1])
            if (nowArea > maxWaterArea) {
                maxWaterArea = nowArea
            }
        }
    }
    console.log(maxWaterArea, '11');
};

/**
 * 雙指針法
 * 注：只要短边高度选定了，当时最大面积一定是短边坐标和边界的最大值，无论长边怎么移动都一定是面积缩小的
 *  */ 
var maxArea = function (height) {
    var max = 0,
        i = 0,
        j = height.length -1
    while (i < j) {
        let minHeight = height[i] < height[j] ? height[i++] : height[j--]
        nowArea = minHeight * (j - i + 1)
        max = Math.max(max, nowArea)
    }
    console.log(max);
}
var height = [4, 3, 2, 1, 4]
maxArea(height)