'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleDetails = function (_React$Component) {
    _inherits(ToggleDetails, _React$Component);

    function ToggleDetails() {
        _classCallCheck(this, ToggleDetails);

        var _this = _possibleConstructorReturn(this, (ToggleDetails.__proto__ || Object.getPrototypeOf(ToggleDetails)).call(this));

        _this.state = {
            x: false,
            title: 'Toggle Details',
            show: 'Show Details',
            hide: 'Hide Details',
            message: 'THis is the hidden message from the page'
        };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(ToggleDetails, [{
        key: 'toggle',
        value: function toggle() {
            this.setState(function (y) {
                return {
                    x: !y.x
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.state.title
                ),
                React.createElement(
                    'button',
                    { onClick: this.toggle },
                    this.state.x ? this.state.hide : this.state.show
                ),
                this.state.x && React.createElement(
                    'p',
                    null,
                    'this.state.message'
                )
            );
        }
    }]);

    return ToggleDetails;
}(React.Component);

ReactDOM.render(React.createElement(ToggleDetails, null), document.querySelector('#playground'));
