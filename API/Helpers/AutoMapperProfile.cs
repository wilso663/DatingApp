using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<AppUser, MemberDTO>().ForMember(dest => dest.PhotoUrl, 
                opt => opt.MapFrom(src => src.Photos.FirstOrDefault(x => x.IsMain).Url));
            CreateMap<Photo, PhotoDTO>();
        }
    }
}
