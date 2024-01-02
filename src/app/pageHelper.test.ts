import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { validateZipCode } from "../../utility/validateZipCode"
import { handleSubmit } from "./pageHelper"

jest.mock("next/navigation", () => ({
    useRouter:jest.fn()
}))

jest.mock("../../utility/validateZipCode")

describe("handleSubmit", () => {
    const mockRouter = {
        push: jest.fn()
    }as unknown as AppRouterInstance
    beforeEach(() => {
        jest.clearAllMocks()
    })
    it("should navigate to diplayPage if zipCode is valid", ()=>{
        (validateZipCode as jest.Mock).mockReturnValue(true)
        handleSubmit("12345", mockRouter)
        expect(mockRouter.push).toHaveBeenCalledWith(`/displayPage?zipCode=12345`)
    })
    it("should alert and return null if zipCode is invalid", ()=>{
        (validateZipCode as jest.Mock).mockReturnValue(false)
        window.alert = jest.fn()
        handleSubmit("123G",mockRouter)
        expect(window.alert).toHaveBeenCalledWith("The zip code was either not provided or invalid")
    })
    it("should alert and return null if zipCode is null", ()=>{
        window.alert = jest.fn()
        handleSubmit(null, mockRouter)
        expect(window.alert).toHaveBeenCalledWith("The zip code was either not provided or invalid")
    })
})