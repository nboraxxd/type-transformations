/**
 * Định nghĩa kiểu Route sao cho nó chỉ chấp nhận các chuỗi bắt đầu bằng dấu gạch chéo /
 * Điều này sẽ đảm bảo rằng các lời gọi hàm goToRoute với các giá trị chuỗi không hợp lệ sẽ gây ra lỗi biên dịch.
 */
type Route = `/${string}`

export const goToRoute = (route: Route) => {}

// Should succeed:

goToRoute('/users')
goToRoute('/')
goToRoute('/admin/users')

// Should error:

// @ts-expect-error
goToRoute('users/1')
// @ts-expect-error
goToRoute('http://facebook.com')
